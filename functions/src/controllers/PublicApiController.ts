import ResourceProvider from '../resource/index';

class PublicApiController {
  static paymentPrerequest(_request: any, response: any) {
    // add constraint for body (public_key, currency)
    return response.json(ResourceProvider(response).getPrerequestData());
  }
}

export default PublicApiController;