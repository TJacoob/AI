// Client entry point, imports all client code

import '/imports/startup/client';
import '/imports/startup/both';

import { ScalarValueType } from '/imports/api/scalarValueType/scalarValueType.js';
window.ScalarValueType =  ScalarValueType ;

import { EnumValueType } from '/imports/api/enumValueType/enumValueType.js';
window.EnumValueType =  EnumValueType ;

import { Enumerated } from '/imports/api/enumerated/enumerated.js';
window.Enumerated =  Enumerated ;

