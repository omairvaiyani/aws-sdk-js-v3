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

import {
  IoTSecureTunnelingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTSecureTunnelingClient";
import { DescribeTunnelRequest, DescribeTunnelResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTunnelCommand,
  serializeAws_json1_1DescribeTunnelCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeTunnelCommandInput extends DescribeTunnelRequest {}
export interface DescribeTunnelCommandOutput extends DescribeTunnelResponse, __MetadataBearer {}

/**
 * <p>Gets information about a tunnel identified by the unique tunnel id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, DescribeTunnelCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, DescribeTunnelCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const command = new DescribeTunnelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTunnelCommandInput} for command's `input` shape.
 * @see {@link DescribeTunnelCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for IoTSecureTunnelingClient's `config` shape.
 *
 */
export class DescribeTunnelCommand extends $Command<
  DescribeTunnelCommandInput,
  DescribeTunnelCommandOutput,
  IoTSecureTunnelingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTunnelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSecureTunnelingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTunnelCommandInput, DescribeTunnelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSecureTunnelingClient";
    const commandName = "DescribeTunnelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTunnelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTunnelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTunnelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTunnelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTunnelCommandOutput> {
    return deserializeAws_json1_1DescribeTunnelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
