// Client entry point, imports all client code

import '/imports/startup/client';
import '/imports/startup/both';

import { ScalarValueType } from '/imports/api/scalarValueType/scalarValueType.js';
window.ScalarValueType =  ScalarValueType ;

import { EnumValueType } from '/imports/api/enumValueType/enumValueType.js';
window.EnumValueType =  EnumValueType ;

import { Enumerated } from '/imports/api/enumerated/enumerated.js';
window.Enumerated =  Enumerated ;

import { Property } from '/imports/api/property/property.js';
window.Property =  Property ;

import { DeviceType } from '/imports/api/deviceType/deviceType.js';
window.DeviceType =  DeviceType ;

import { Device } from '/imports/api/device/device.js';
window.Device =  Device ;

import { DeviceState } from '/imports/api/deviceState/deviceState.js';
window.DeviceState =  DeviceState ;

import { House } from '/imports/api/house/house.js';
window.House =  House ;

import { Floor } from '/imports/api/floor/floor.js';
window.Floor =  Floor ;

import { Division } from '/imports/api/division/division.js';
window.Division =  Division ;