import Moment from 'moment-timezone';
import { extendMoment } from 'moment-range';
Moment.tz.setDefault("Europe/Stockholm");
Moment.locale('sv');
const moment = extendMoment(Moment);

export default moment;
