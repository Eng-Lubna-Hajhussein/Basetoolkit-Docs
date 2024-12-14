export const source = `
datewise('2020&11&20', 'YYYY&MM&DD').fromNow()
datewise('2012,06,20', 'YYYY,MM,DD').fromNow()
datewise('20070620', 'YYYYMMDD').fromNow()
datewise().startOf('day').fromNow()
datewise().endOf('day').fromNow()
datewise().startOf('hour').fromNow()
`;
