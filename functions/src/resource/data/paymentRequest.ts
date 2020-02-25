export default {
  service: 'card',
  flow: 'card',
  status: 'pending',
  resolution: 'ok',
  payment: {
    status: 'capture_failed',
    resolution: 'decline',
    flowData: {
      action: 'https://cap.attempts.securecode.com/acspage/cap?RID=14&VAA=B',
      method: 'POST',
      params: {
        MD: '45210016',
        PaReq: 'eJxVUstuFuSmqQnHJC4L82+jdXP6sWucg=',
        TermUrl: 'https://paycore.io/3ds-return?pid=pay_DdkWz9qcIvG6oduu18vTGsTw_FB_bU',
      },
    },
  },
}