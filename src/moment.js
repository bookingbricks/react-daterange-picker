import Moment from 'moment-timezone';
import { extendMoment } from 'moment-range';
Moment.locale('sv');

export default extendMoment(Moment);
