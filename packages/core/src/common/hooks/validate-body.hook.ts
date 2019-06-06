// 3p
import * as Ajv from 'ajv';

// FoalTS
import { Config, Context, Hook, HookDecorator, HttpResponseBadRequest } from '../../core';
import { ApiRequestBody, ApiResponse, IApiRequestBody } from '../../openapi';
import { getAjvInstance } from '../utils';

/**
 * Hook factory validating the body of the request against a AJV schema.
 *
 * @export
 * @param {object} schema - Schema used to validate the body request.
 * @param {{ openapi?: boolean }} [options={}] - Options to add openapi metadata
 * @returns {HookDecorator} - The hook.
 */
export function ValidateBody(schema: object, options: { openapi?: boolean } = {}): HookDecorator {
  const ajv = getAjvInstance();
  const isValid = ajv.compile(schema);

  function validate(ctx: Context) {
    if (!isValid(ctx.request.body)) {
      return new HttpResponseBadRequest(isValid.errors as Ajv.ErrorObject[]);
    }
  }

  return (target: any, propertyKey?: string) =>  {
    Hook(validate)(target, propertyKey);

    if (options.openapi === false || (options.openapi === undefined && !Config.get('settings.openapi.useHooks'))) {
      return;
    }

    const requestBody: IApiRequestBody = {
      content: {
        'application/json': { schema }
      },
      required: true
    };

    if (propertyKey) {
      ApiRequestBody(requestBody)(target, propertyKey);
    } else {
      ApiRequestBody(requestBody)(target);
    }

    ApiResponse(400, { description: 'Bad request.' })(target, propertyKey);
  };
}
