import { GenericCapabilityPayload } from "./GenericCapabilityPayload";

export class QueuePublishRequest {
  routing_key: string;
  payload: GenericCapabilityPayload;
}
