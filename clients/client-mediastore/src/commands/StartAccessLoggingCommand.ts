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

import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { StartAccessLoggingInput, StartAccessLoggingOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StartAccessLoggingCommand,
  serializeAws_json1_1StartAccessLoggingCommand,
} from "../protocols/Aws_json1_1";

export interface StartAccessLoggingCommandInput extends StartAccessLoggingInput {}
export interface StartAccessLoggingCommandOutput extends StartAccessLoggingOutput, __MetadataBearer {}

/**
 * <p>Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, StartAccessLoggingCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, StartAccessLoggingCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new StartAccessLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAccessLoggingCommandInput} for command's `input` shape.
 * @see {@link StartAccessLoggingCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 */
export class StartAccessLoggingCommand extends $Command<
  StartAccessLoggingCommandInput,
  StartAccessLoggingCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartAccessLoggingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartAccessLoggingCommandInput, StartAccessLoggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "StartAccessLoggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartAccessLoggingInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartAccessLoggingOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartAccessLoggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartAccessLoggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartAccessLoggingCommandOutput> {
    return deserializeAws_json1_1StartAccessLoggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
