import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { RefreshTokenRequest, RefreshTokenResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RefreshTokenCommand,
  serializeAws_restJson1RefreshTokenCommand,
} from "../protocols/Aws_restJson1";

export interface RefreshTokenCommandInput extends RefreshTokenRequest {}
export interface RefreshTokenCommandOutput extends RefreshTokenResponse, __MetadataBearer {}

/**
 * <p>Refreshes a previously issued access token that might have expired.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, RefreshTokenCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, RefreshTokenCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * const client = new AmplifyUIBuilderClient(config);
 * const command = new RefreshTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RefreshTokenCommandInput} for command's `input` shape.
 * @see {@link RefreshTokenCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 */
export class RefreshTokenCommand extends $Command<
  RefreshTokenCommandInput,
  RefreshTokenCommandOutput,
  AmplifyUIBuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RefreshTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyUIBuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RefreshTokenCommandInput, RefreshTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyUIBuilderClient";
    const commandName = "RefreshTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RefreshTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RefreshTokenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RefreshTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RefreshTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RefreshTokenCommandOutput> {
    return deserializeAws_restJson1RefreshTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
