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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  StartNetworkInsightsAccessScopeAnalysisRequest,
  StartNetworkInsightsAccessScopeAnalysisResult,
} from "../models/models_6";
import {
  deserializeAws_ec2StartNetworkInsightsAccessScopeAnalysisCommand,
  serializeAws_ec2StartNetworkInsightsAccessScopeAnalysisCommand,
} from "../protocols/Aws_ec2";

export interface StartNetworkInsightsAccessScopeAnalysisCommandInput
  extends StartNetworkInsightsAccessScopeAnalysisRequest {}
export interface StartNetworkInsightsAccessScopeAnalysisCommandOutput
  extends StartNetworkInsightsAccessScopeAnalysisResult,
    __MetadataBearer {}

/**
 * <p>Starts analyzing the specified Network Access Scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StartNetworkInsightsAccessScopeAnalysisCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StartNetworkInsightsAccessScopeAnalysisCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new StartNetworkInsightsAccessScopeAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartNetworkInsightsAccessScopeAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartNetworkInsightsAccessScopeAnalysisCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class StartNetworkInsightsAccessScopeAnalysisCommand extends $Command<
  StartNetworkInsightsAccessScopeAnalysisCommandInput,
  StartNetworkInsightsAccessScopeAnalysisCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartNetworkInsightsAccessScopeAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartNetworkInsightsAccessScopeAnalysisCommandInput,
    StartNetworkInsightsAccessScopeAnalysisCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "StartNetworkInsightsAccessScopeAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartNetworkInsightsAccessScopeAnalysisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartNetworkInsightsAccessScopeAnalysisResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartNetworkInsightsAccessScopeAnalysisCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2StartNetworkInsightsAccessScopeAnalysisCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartNetworkInsightsAccessScopeAnalysisCommandOutput> {
    return deserializeAws_ec2StartNetworkInsightsAccessScopeAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
