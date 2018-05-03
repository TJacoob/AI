// Client entry point, imports all client code

import '/imports/startup/client';
import '/imports/startup/both';

import { ScalarValueType } from '/imports/api/scalarValueType/scalarValueType.js';
window.ScalarValueType =  ScalarValueType ;