import fs from 'fs';
import {filename} from '../todoLoc';



export default  function addItem(item) {
  const line = ` ${item}\n`;

  fs.appendFile(filename, line);

}
