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

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DisableEnhancedMonitoringInput, EnhancedMonitoringOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DisableEnhancedMonitoringCommand,
  serializeAws_json1_1DisableEnhancedMonitoringCommand,
} from "../protocols/Aws_json1_1";

export interface DisableEnhancedMonitoringCommandInput extends DisableEnhancedMonitoringInput {}
export interface DisableEnhancedMonitoringCommandOutput extends EnhancedMonitoringOutput, __MetadataBearer {}

/**
 * <p>Disables enhanced monitoring.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DisableEnhancedMonitoringCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DisableEnhancedMonitoringCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new DisableEnhancedMonitoringCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableEnhancedMonitoringCommandInput} for command's `input` shape.
 * @see {@link DisableEnhancedMonitoringCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 */
export class DisableEnhancedMonitoringCommand extends $Command<
  DisableEnhancedMonitoringCommandInput,
  DisableEnhancedMonitoringCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableEnhancedMonitoringCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableEnhancedMonitoringCommandInput, DisableEnhancedMonitoringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "DisableEnhancedMonitoringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableEnhancedMonitoringInput.filterSensitiveLog,
      outputFilterSensitiveLog: EnhancedMonitoringOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableEnhancedMonitoringCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableEnhancedMonitoringCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableEnhancedMonitoringCommandOutput> {
    return deserializeAws_json1_1DisableEnhancedMonitoringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
