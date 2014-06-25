'use strict';

// src/runtime.h
// src/symbol.js
// src/objects.h

// Generated via ./scripts/gen-api.js

// The interface to C++ runtime functions.
// ----------------------------------------------------------------------------
// RUNTIME_FUNCTION_LIST_ALWAYS defines runtime calls available in both
// release and debug mode.
// This macro should only be used by the macro RUNTIME_FUNCTION_LIST.
/**
 * Undocumented
 * 
 * @name GetProperty
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GetProperty = function GetProperty(arg1, arg2) {
  /*jshint ignore: start */
  return %GetProperty(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name KeyedGetProperty
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.KeyedGetProperty = function KeyedGetProperty(arg1, arg2) {
  /*jshint ignore: start */
  return %KeyedGetProperty(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DeleteProperty
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.DeleteProperty = function DeleteProperty(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %DeleteProperty(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasLocalProperty
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.HasLocalProperty = function HasLocalProperty(arg1, arg2) {
  /*jshint ignore: start */
  return %HasLocalProperty(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasProperty
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.HasProperty = function HasProperty(arg1, arg2) {
  /*jshint ignore: start */
  return %HasProperty(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasElement
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.HasElement = function HasElement(arg1, arg2) {
  /*jshint ignore: start */
  return %HasElement(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsPropertyEnumerable
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.IsPropertyEnumerable = function IsPropertyEnumerable(arg1, arg2) {
  /*jshint ignore: start */
  return %IsPropertyEnumerable(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetPropertyNames
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetPropertyNames = function GetPropertyNames(arg1) {
  /*jshint ignore: start */
  return %GetPropertyNames(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetPropertyNamesFast
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetPropertyNamesFast = function GetPropertyNamesFast(arg1) {
  /*jshint ignore: start */
  return %GetPropertyNamesFast(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * BREAKS due to immediate execution
 * 
 * @name GetLocalPropertyNames
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GetLocalPropertyNames = function GetLocalPropertyNames(arg1, arg2) {
  /*jshint ignore: start */
  // return %GetLocalPropertyNames(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetLocalElementNames
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetLocalElementNames = function GetLocalElementNames(arg1) {
  /*jshint ignore: start */
  return %GetLocalElementNames(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetInterceptorInfo
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetInterceptorInfo = function GetInterceptorInfo(arg1) {
  /*jshint ignore: start */
  return %GetInterceptorInfo(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetNamedInterceptorPropertyNames
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetNamedInterceptorPropertyNames = function GetNamedInterceptorPropertyNames(arg1) {
  /*jshint ignore: start */
  return %GetNamedInterceptorPropertyNames(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetIndexedInterceptorElementNames
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetIndexedInterceptorElementNames = function GetIndexedInterceptorElementNames(arg1) {
  /*jshint ignore: start */
  return %GetIndexedInterceptorElementNames(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetArgumentsProperty
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetArgumentsProperty = function GetArgumentsProperty(arg1) {
  /*jshint ignore: start */
  return %GetArgumentsProperty(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ToFastProperties
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ToFastProperties = function ToFastProperties(arg1) {
  /*jshint ignore: start */
  return %ToFastProperties(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FinishArrayPrototypeSetup
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FinishArrayPrototypeSetup = function FinishArrayPrototypeSetup(arg1) {
  /*jshint ignore: start */
  return %FinishArrayPrototypeSetup(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SpecialArrayFunctions
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SpecialArrayFunctions = function SpecialArrayFunctions(arg1) {
  /*jshint ignore: start */
  return %SpecialArrayFunctions(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsSloppyModeFunction
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.IsSloppyModeFunction = function IsSloppyModeFunction(arg1) {
  /*jshint ignore: start */
  return %IsSloppyModeFunction(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetDefaultReceiver
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetDefaultReceiver = function GetDefaultReceiver(arg1) {
  /*jshint ignore: start */
  return %GetDefaultReceiver(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetPrototype
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetPrototype = function GetPrototype(arg1) {
  /*jshint ignore: start */
  return %GetPrototype(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetPrototype
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.SetPrototype = function SetPrototype(arg1, arg2) {
  /*jshint ignore: start */
  return %SetPrototype(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsInPrototypeChain
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.IsInPrototypeChain = function IsInPrototypeChain(arg1, arg2) {
  /*jshint ignore: start */
  return %IsInPrototypeChain(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetOwnProperty
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GetOwnProperty = function GetOwnProperty(arg1, arg2) {
  /*jshint ignore: start */
  return %GetOwnProperty(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsExtensible
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.IsExtensible = function IsExtensible(arg1) {
  /*jshint ignore: start */
  return %IsExtensible(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name PreventExtensions
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.PreventExtensions = function PreventExtensions(arg1) {
  /*jshint ignore: start */
  return %PreventExtensions(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name CheckIsBootstrapping
 * @function
 * @return {}
 */
exports.CheckIsBootstrapping = function CheckIsBootstrapping() {
  /*jshint ignore: start */
  return %CheckIsBootstrapping();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetRootNaN
 * @function
 * @return {}
 */
exports.GetRootNaN = function GetRootNaN() {
  /*jshint ignore: start */
  return %GetRootNaN();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name Apply
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @param  {} arg5
 * @return {}
 */
exports.Apply = function Apply(arg1, arg2, arg3, arg4, arg5) {
  /*jshint ignore: start */
  return %Apply(arg1, arg2, arg3, arg4, arg5);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetFunctionDelegate
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetFunctionDelegate = function GetFunctionDelegate(arg1) {
  /*jshint ignore: start */
  return %GetFunctionDelegate(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetConstructorDelegate
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetConstructorDelegate = function GetConstructorDelegate(arg1) {
  /*jshint ignore: start */
  return %GetConstructorDelegate(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DeoptimizeFunction
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DeoptimizeFunction = function DeoptimizeFunction(arg1) {
  /*jshint ignore: start */
  return %DeoptimizeFunction(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ClearFunctionTypeFeedback
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ClearFunctionTypeFeedback = function ClearFunctionTypeFeedback(arg1) {
  /*jshint ignore: start */
  return %ClearFunctionTypeFeedback(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name RunningInSimulator
 * @function
 * @return {}
 */
exports.RunningInSimulator = function RunningInSimulator() {
  /*jshint ignore: start */
  return %RunningInSimulator();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsConcurrentRecompilationSupported
 * @function
 * @return {}
 */
exports.IsConcurrentRecompilationSupported = function IsConcurrentRecompilationSupported() {
  /*jshint ignore: start */
  return %IsConcurrentRecompilationSupported();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NeverOptimizeFunction
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.NeverOptimizeFunction = function NeverOptimizeFunction(arg1) {
  /*jshint ignore: start */
  return %NeverOptimizeFunction(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetOptimizationCount
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetOptimizationCount = function GetOptimizationCount(arg1) {
  /*jshint ignore: start */
  return %GetOptimizationCount(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name UnblockConcurrentRecompilation
 * @function
 * @return {}
 */
exports.UnblockConcurrentRecompilation = function UnblockConcurrentRecompilation() {
  /*jshint ignore: start */
  return %UnblockConcurrentRecompilation();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name CompileForOnStackReplacement
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.CompileForOnStackReplacement = function CompileForOnStackReplacement(arg1) {
  /*jshint ignore: start */
  return %CompileForOnStackReplacement(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetNativeFlag
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SetNativeFlag = function SetNativeFlag(arg1) {
  /*jshint ignore: start */
  return %SetNativeFlag(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetInlineBuiltinFlag
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SetInlineBuiltinFlag = function SetInlineBuiltinFlag(arg1) {
  /*jshint ignore: start */
  return %SetInlineBuiltinFlag(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StoreArrayLiteralElement
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @param  {} arg5
 * @return {}
 */
exports.StoreArrayLiteralElement = function StoreArrayLiteralElement(arg1, arg2, arg3, arg4, arg5) {
  /*jshint ignore: start */
  return %StoreArrayLiteralElement(arg1, arg2, arg3, arg4, arg5);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugPrepareStepInIfStepping
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DebugPrepareStepInIfStepping = function DebugPrepareStepInIfStepping(arg1) {
  /*jshint ignore: start */
  return %DebugPrepareStepInIfStepping(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugPromiseHandlePrologue
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DebugPromiseHandlePrologue = function DebugPromiseHandlePrologue(arg1) {
  /*jshint ignore: start */
  return %DebugPromiseHandlePrologue(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugPromiseHandleEpilogue
 * @function
 * @return {}
 */
exports.DebugPromiseHandleEpilogue = function DebugPromiseHandleEpilogue() {
  /*jshint ignore: start */
  return %DebugPromiseHandleEpilogue();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FlattenString
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FlattenString = function FlattenString(arg1) {
  /*jshint ignore: start */
  return %FlattenString(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LoadMutableDouble
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.LoadMutableDouble = function LoadMutableDouble(arg1, arg2) {
  /*jshint ignore: start */
  return %LoadMutableDouble(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name TryMigrateInstance
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.TryMigrateInstance = function TryMigrateInstance(arg1) {
  /*jshint ignore: start */
  return %TryMigrateInstance(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NotifyContextDisposed
 * @function
 * @return {}
 */
exports.NotifyContextDisposed = function NotifyContextDisposed() {
  /*jshint ignore: start */
  return %NotifyContextDisposed();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name PushIfAbsent
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.PushIfAbsent = function PushIfAbsent(arg1, arg2) {
  /*jshint ignore: start */
  return %PushIfAbsent(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ArrayConcat
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ArrayConcat = function ArrayConcat(arg1) {
  /*jshint ignore: start */
  return %ArrayConcat(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ToBool
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ToBool = function ToBool(arg1) {
  /*jshint ignore: start */
  return %ToBool(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name Typeof
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.Typeof = function Typeof(arg1) {
  /*jshint ignore: start */
  return %Typeof(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringToNumber
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.StringToNumber = function StringToNumber(arg1) {
  /*jshint ignore: start */
  return %StringToNumber(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringParseInt
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.StringParseInt = function StringParseInt(arg1, arg2) {
  /*jshint ignore: start */
  return %StringParseInt(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringParseFloat
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.StringParseFloat = function StringParseFloat(arg1) {
  /*jshint ignore: start */
  return %StringParseFloat(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringToLowerCase
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.StringToLowerCase = function StringToLowerCase(arg1) {
  /*jshint ignore: start */
  return %StringToLowerCase(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringToUpperCase
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.StringToUpperCase = function StringToUpperCase(arg1) {
  /*jshint ignore: start */
  return %StringToUpperCase(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringSplit
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.StringSplit = function StringSplit(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %StringSplit(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name CharFromCode
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.CharFromCode = function CharFromCode(arg1) {
  /*jshint ignore: start */
  return %CharFromCode(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name URIEscape
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.URIEscape = function URIEscape(arg1) {
  /*jshint ignore: start */
  return %URIEscape(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name URIUnescape
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.URIUnescape = function URIUnescape(arg1) {
  /*jshint ignore: start */
  return %URIUnescape(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberToInteger
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.NumberToInteger = function NumberToInteger(arg1) {
  /*jshint ignore: start */
  return %NumberToInteger(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberToIntegerMapMinusZero
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.NumberToIntegerMapMinusZero = function NumberToIntegerMapMinusZero(arg1) {
  /*jshint ignore: start */
  return %NumberToIntegerMapMinusZero(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberToJSUint32
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.NumberToJSUint32 = function NumberToJSUint32(arg1) {
  /*jshint ignore: start */
  return %NumberToJSUint32(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberToJSInt32
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.NumberToJSInt32 = function NumberToJSInt32(arg1) {
  /*jshint ignore: start */
  return %NumberToJSInt32(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberAdd
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberAdd = function NumberAdd(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberAdd(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberSub
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberSub = function NumberSub(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberSub(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberMul
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberMul = function NumberMul(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberMul(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberDiv
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberDiv = function NumberDiv(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberDiv(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberMod
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberMod = function NumberMod(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberMod(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberUnaryMinus
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.NumberUnaryMinus = function NumberUnaryMinus(arg1) {
  /*jshint ignore: start */
  return %NumberUnaryMinus(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberImul
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberImul = function NumberImul(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberImul(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringBuilderConcat
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.StringBuilderConcat = function StringBuilderConcat(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %StringBuilderConcat(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringBuilderJoin
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.StringBuilderJoin = function StringBuilderJoin(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %StringBuilderJoin(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SparseJoinWithSeparator
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.SparseJoinWithSeparator = function SparseJoinWithSeparator(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %SparseJoinWithSeparator(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberOr
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberOr = function NumberOr(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberOr(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberAnd
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberAnd = function NumberAnd(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberAnd(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberXor
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberXor = function NumberXor(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberXor(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberShl
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberShl = function NumberShl(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberShl(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberShr
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberShr = function NumberShr(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberShr(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberSar
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberSar = function NumberSar(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberSar(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberEquals
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberEquals = function NumberEquals(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberEquals(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringEquals
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.StringEquals = function StringEquals(arg1, arg2) {
  /*jshint ignore: start */
  return %StringEquals(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberCompare
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.NumberCompare = function NumberCompare(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %NumberCompare(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SmiLexicographicCompare
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.SmiLexicographicCompare = function SmiLexicographicCompare(arg1, arg2) {
  /*jshint ignore: start */
  return %SmiLexicographicCompare(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MathAcos
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MathAcos = function MathAcos(arg1) {
  /*jshint ignore: start */
  return %MathAcos(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MathAsin
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MathAsin = function MathAsin(arg1) {
  /*jshint ignore: start */
  return %MathAsin(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MathAtan
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MathAtan = function MathAtan(arg1) {
  /*jshint ignore: start */
  return %MathAtan(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MathFloor
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MathFloor = function MathFloor(arg1) {
  /*jshint ignore: start */
  return %MathFloor(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MathAtan2
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.MathAtan2 = function MathAtan2(arg1, arg2) {
  /*jshint ignore: start */
  return %MathAtan2(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MathExp
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MathExp = function MathExp(arg1) {
  /*jshint ignore: start */
  return %MathExp(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name RoundNumber
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.RoundNumber = function RoundNumber(arg1) {
  /*jshint ignore: start */
  return %RoundNumber(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MathFround
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MathFround = function MathFround(arg1) {
  /*jshint ignore: start */
  return %MathFround(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name RegExpCompile
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.RegExpCompile = function RegExpCompile(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %RegExpCompile(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name RegExpExecMultiple
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.RegExpExecMultiple = function RegExpExecMultiple(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %RegExpExecMultiple(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name RegExpInitializeObject
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @param  {} arg5
 * @return {}
 */
exports.RegExpInitializeObject = function RegExpInitializeObject(arg1, arg2, arg3, arg4, arg5) {
  /*jshint ignore: start */
  return %RegExpInitializeObject(arg1, arg2, arg3, arg4, arg5);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ParseJson
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ParseJson = function ParseJson(arg1) {
  /*jshint ignore: start */
  return %ParseJson(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name BasicJSONStringify
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.BasicJSONStringify = function BasicJSONStringify(arg1) {
  /*jshint ignore: start */
  return %BasicJSONStringify(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name QuoteJSONString
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.QuoteJSONString = function QuoteJSONString(arg1) {
  /*jshint ignore: start */
  return %QuoteJSONString(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringIndexOf
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.StringIndexOf = function StringIndexOf(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %StringIndexOf(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringLastIndexOf
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.StringLastIndexOf = function StringLastIndexOf(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %StringLastIndexOf(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringLocaleCompare
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.StringLocaleCompare = function StringLocaleCompare(arg1, arg2) {
  /*jshint ignore: start */
  return %StringLocaleCompare(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringReplaceGlobalRegExpWithString
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.StringReplaceGlobalRegExpWithString = function StringReplaceGlobalRegExpWithString(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %StringReplaceGlobalRegExpWithString(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringReplaceOneCharWithString
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.StringReplaceOneCharWithString = function StringReplaceOneCharWithString(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %StringReplaceOneCharWithString(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringMatch
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.StringMatch = function StringMatch(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %StringMatch(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringTrim
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.StringTrim = function StringTrim(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %StringTrim(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name StringToArray
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.StringToArray = function StringToArray(arg1, arg2) {
  /*jshint ignore: start */
  return %StringToArray(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NewStringWrapper
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.NewStringWrapper = function NewStringWrapper(arg1) {
  /*jshint ignore: start */
  return %NewStringWrapper(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NewString
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NewString = function NewString(arg1, arg2) {
  /*jshint ignore: start */
  return %NewString(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name TruncateString
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.TruncateString = function TruncateString(arg1, arg2) {
  /*jshint ignore: start */
  return %TruncateString(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberToRadixString
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberToRadixString = function NumberToRadixString(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberToRadixString(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberToFixed
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberToFixed = function NumberToFixed(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberToFixed(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberToExponential
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberToExponential = function NumberToExponential(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberToExponential(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NumberToPrecision
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.NumberToPrecision = function NumberToPrecision(arg1, arg2) {
  /*jshint ignore: start */
  return %NumberToPrecision(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsValidSmi
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.IsValidSmi = function IsValidSmi(arg1) {
  /*jshint ignore: start */
  return %IsValidSmi(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionSetInstanceClassName
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.FunctionSetInstanceClassName = function FunctionSetInstanceClassName(arg1, arg2) {
  /*jshint ignore: start */
  return %FunctionSetInstanceClassName(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionSetLength
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.FunctionSetLength = function FunctionSetLength(arg1, arg2) {
  /*jshint ignore: start */
  return %FunctionSetLength(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionSetPrototype
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.FunctionSetPrototype = function FunctionSetPrototype(arg1, arg2) {
  /*jshint ignore: start */
  return %FunctionSetPrototype(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionSetReadOnlyPrototype
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FunctionSetReadOnlyPrototype = function FunctionSetReadOnlyPrototype(arg1) {
  /*jshint ignore: start */
  return %FunctionSetReadOnlyPrototype(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionGetName
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FunctionGetName = function FunctionGetName(arg1) {
  /*jshint ignore: start */
  return %FunctionGetName(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionSetName
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.FunctionSetName = function FunctionSetName(arg1, arg2) {
  /*jshint ignore: start */
  return %FunctionSetName(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionNameShouldPrintAsAnonymous
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FunctionNameShouldPrintAsAnonymous = function FunctionNameShouldPrintAsAnonymous(arg1) {
  /*jshint ignore: start */
  return %FunctionNameShouldPrintAsAnonymous(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionMarkNameShouldPrintAsAnonymous
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FunctionMarkNameShouldPrintAsAnonymous = function FunctionMarkNameShouldPrintAsAnonymous(arg1) {
  /*jshint ignore: start */
  return %FunctionMarkNameShouldPrintAsAnonymous(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionIsGenerator
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FunctionIsGenerator = function FunctionIsGenerator(arg1) {
  /*jshint ignore: start */
  return %FunctionIsGenerator(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionBindArguments
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.FunctionBindArguments = function FunctionBindArguments(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %FunctionBindArguments(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name BoundFunctionGetBindings
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.BoundFunctionGetBindings = function BoundFunctionGetBindings(arg1) {
  /*jshint ignore: start */
  return %BoundFunctionGetBindings(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionRemovePrototype
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FunctionRemovePrototype = function FunctionRemovePrototype(arg1) {
  /*jshint ignore: start */
  return %FunctionRemovePrototype(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionGetSourceCode
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FunctionGetSourceCode = function FunctionGetSourceCode(arg1) {
  /*jshint ignore: start */
  return %FunctionGetSourceCode(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionGetScript
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FunctionGetScript = function FunctionGetScript(arg1) {
  /*jshint ignore: start */
  return %FunctionGetScript(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionGetScriptSourcePosition
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FunctionGetScriptSourcePosition = function FunctionGetScriptSourcePosition(arg1) {
  /*jshint ignore: start */
  return %FunctionGetScriptSourcePosition(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionGetPositionForOffset
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.FunctionGetPositionForOffset = function FunctionGetPositionForOffset(arg1, arg2) {
  /*jshint ignore: start */
  return %FunctionGetPositionForOffset(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionIsAPIFunction
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FunctionIsAPIFunction = function FunctionIsAPIFunction(arg1) {
  /*jshint ignore: start */
  return %FunctionIsAPIFunction(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionIsBuiltin
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FunctionIsBuiltin = function FunctionIsBuiltin(arg1) {
  /*jshint ignore: start */
  return %FunctionIsBuiltin(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetScript
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetScript = function GetScript(arg1) {
  /*jshint ignore: start */
  return %GetScript(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name CollectStackTrace
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.CollectStackTrace = function CollectStackTrace(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %CollectStackTrace(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetAndClearOverflowedStackTrace
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetAndClearOverflowedStackTrace = function GetAndClearOverflowedStackTrace(arg1) {
  /*jshint ignore: start */
  return %GetAndClearOverflowedStackTrace(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetV8Version
 * @function
 * @return {}
 */
exports.GetV8Version = function GetV8Version() {
  /*jshint ignore: start */
  return %GetV8Version();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetCode
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.SetCode = function SetCode(arg1, arg2) {
  /*jshint ignore: start */
  return %SetCode(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetExpectedNumberOfProperties
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.SetExpectedNumberOfProperties = function SetExpectedNumberOfProperties(arg1, arg2) {
  /*jshint ignore: start */
  return %SetExpectedNumberOfProperties(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * BREAKS due to immediate execution
 * 
 * @name CreateApiFunction
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.CreateApiFunction = function CreateApiFunction(arg1, arg2) {
  /*jshint ignore: start */
  // return %CreateApiFunction(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsTemplate
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.IsTemplate = function IsTemplate(arg1) {
  /*jshint ignore: start */
  return %IsTemplate(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetTemplateField
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GetTemplateField = function GetTemplateField(arg1, arg2) {
  /*jshint ignore: start */
  return %GetTemplateField(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DisableAccessChecks
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DisableAccessChecks = function DisableAccessChecks(arg1) {
  /*jshint ignore: start */
  return %DisableAccessChecks(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name EnableAccessChecks
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.EnableAccessChecks = function EnableAccessChecks(arg1) {
  /*jshint ignore: start */
  return %EnableAccessChecks(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetAccessorProperty
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @param  {} arg5
 * @param  {} arg6
 * @return {}
 */
exports.SetAccessorProperty = function SetAccessorProperty(arg1, arg2, arg3, arg4, arg5, arg6) {
  /*jshint ignore: start */
  return %SetAccessorProperty(arg1, arg2, arg3, arg4, arg5, arg6);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DateCurrentTime
 * @function
 * @return {}
 */
exports.DateCurrentTime = function DateCurrentTime() {
  /*jshint ignore: start */
  return %DateCurrentTime();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DateParseString
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.DateParseString = function DateParseString(arg1, arg2) {
  /*jshint ignore: start */
  return %DateParseString(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DateLocalTimezone
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DateLocalTimezone = function DateLocalTimezone(arg1) {
  /*jshint ignore: start */
  return %DateLocalTimezone(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DateToUTC
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DateToUTC = function DateToUTC(arg1) {
  /*jshint ignore: start */
  return %DateToUTC(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DateMakeDay
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.DateMakeDay = function DateMakeDay(arg1, arg2) {
  /*jshint ignore: start */
  return %DateMakeDay(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DateSetValue
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.DateSetValue = function DateSetValue(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %DateSetValue(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DateCacheVersion
 * @function
 * @return {}
 */
exports.DateCacheVersion = function DateCacheVersion() {
  /*jshint ignore: start */
  return %DateCacheVersion();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * BREAKS due to immediate execution
 * 
 * @name CompileString
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.CompileString = function CompileString(arg1, arg2) {
  /*jshint ignore: start */
  // return %CompileString(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GlobalReceiver
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GlobalReceiver = function GlobalReceiver(arg1) {
  /*jshint ignore: start */
  return %GlobalReceiver(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsAttachedGlobal
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.IsAttachedGlobal = function IsAttachedGlobal(arg1) {
  /*jshint ignore: start */
  return %IsAttachedGlobal(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DefineOrRedefineDataProperty
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.DefineOrRedefineDataProperty = function DefineOrRedefineDataProperty(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %DefineOrRedefineDataProperty(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DefineOrRedefineAccessorProperty
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @param  {} arg5
 * @return {}
 */
exports.DefineOrRedefineAccessorProperty = function DefineOrRedefineAccessorProperty(arg1, arg2, arg3, arg4, arg5) {
  /*jshint ignore: start */
  return %DefineOrRedefineAccessorProperty(arg1, arg2, arg3, arg4, arg5);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetDataProperty
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GetDataProperty = function GetDataProperty(arg1, arg2) {
  /*jshint ignore: start */
  return %GetDataProperty(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetHiddenProperty
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.SetHiddenProperty = function SetHiddenProperty(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %SetHiddenProperty(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name RemoveArrayHoles
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.RemoveArrayHoles = function RemoveArrayHoles(arg1, arg2) {
  /*jshint ignore: start */
  return %RemoveArrayHoles(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetArrayKeys
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GetArrayKeys = function GetArrayKeys(arg1, arg2) {
  /*jshint ignore: start */
  return %GetArrayKeys(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MoveArrayContents
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.MoveArrayContents = function MoveArrayContents(arg1, arg2) {
  /*jshint ignore: start */
  return %MoveArrayContents(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name EstimateNumberOfElements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.EstimateNumberOfElements = function EstimateNumberOfElements(arg1) {
  /*jshint ignore: start */
  return %EstimateNumberOfElements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LookupAccessor
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.LookupAccessor = function LookupAccessor(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %LookupAccessor(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ObjectFreeze
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ObjectFreeze = function ObjectFreeze(arg1) {
  /*jshint ignore: start */
  return %ObjectFreeze(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetMicrotaskState
 * @function
 * @return {}
 */
exports.GetMicrotaskState = function GetMicrotaskState() {
  /*jshint ignore: start */
  return %GetMicrotaskState();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsJSModule
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.IsJSModule = function IsJSModule(arg1) {
  /*jshint ignore: start */
  return %IsJSModule(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name CreateSymbol
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.CreateSymbol = function CreateSymbol(arg1) {
  /*jshint ignore: start */
  return %CreateSymbol(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name CreatePrivateSymbol
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.CreatePrivateSymbol = function CreatePrivateSymbol(arg1) {
  /*jshint ignore: start */
  return %CreatePrivateSymbol(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name CreateGlobalPrivateSymbol
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.CreateGlobalPrivateSymbol = function CreateGlobalPrivateSymbol(arg1) {
  /*jshint ignore: start */
  return %CreateGlobalPrivateSymbol(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NewSymbolWrapper
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.NewSymbolWrapper = function NewSymbolWrapper(arg1) {
  /*jshint ignore: start */
  return %NewSymbolWrapper(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SymbolDescription
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SymbolDescription = function SymbolDescription(arg1) {
  /*jshint ignore: start */
  return %SymbolDescription(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SymbolRegistry
 * @function
 * @return {}
 */
exports.SymbolRegistry = function SymbolRegistry() {
  /*jshint ignore: start */
  return %SymbolRegistry();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SymbolIsPrivate
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SymbolIsPrivate = function SymbolIsPrivate(arg1) {
  /*jshint ignore: start */
  return %SymbolIsPrivate(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name CreateJSProxy
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.CreateJSProxy = function CreateJSProxy(arg1, arg2) {
  /*jshint ignore: start */
  return %CreateJSProxy(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name CreateJSFunctionProxy
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.CreateJSFunctionProxy = function CreateJSFunctionProxy(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %CreateJSFunctionProxy(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsJSProxy
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.IsJSProxy = function IsJSProxy(arg1) {
  /*jshint ignore: start */
  return %IsJSProxy(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsJSFunctionProxy
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.IsJSFunctionProxy = function IsJSFunctionProxy(arg1) {
  /*jshint ignore: start */
  return %IsJSFunctionProxy(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetHandler
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetHandler = function GetHandler(arg1) {
  /*jshint ignore: start */
  return %GetHandler(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetCallTrap
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetCallTrap = function GetCallTrap(arg1) {
  /*jshint ignore: start */
  return %GetCallTrap(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetConstructTrap
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetConstructTrap = function GetConstructTrap(arg1) {
  /*jshint ignore: start */
  return %GetConstructTrap(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name Fix
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.Fix = function Fix(arg1) {
  /*jshint ignore: start */
  return %Fix(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetInitialize
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SetInitialize = function SetInitialize(arg1) {
  /*jshint ignore: start */
  return %SetInitialize(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetAdd
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.SetAdd = function SetAdd(arg1, arg2) {
  /*jshint ignore: start */
  return %SetAdd(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetHas
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.SetHas = function SetHas(arg1, arg2) {
  /*jshint ignore: start */
  return %SetHas(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetDelete
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.SetDelete = function SetDelete(arg1, arg2) {
  /*jshint ignore: start */
  return %SetDelete(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetClear
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SetClear = function SetClear(arg1) {
  /*jshint ignore: start */
  return %SetClear(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetGetSize
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SetGetSize = function SetGetSize(arg1) {
  /*jshint ignore: start */
  return %SetGetSize(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetCreateIterator
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.SetCreateIterator = function SetCreateIterator(arg1, arg2) {
  /*jshint ignore: start */
  return %SetCreateIterator(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetIteratorNext
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SetIteratorNext = function SetIteratorNext(arg1) {
  /*jshint ignore: start */
  return %SetIteratorNext(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetIteratorClose
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SetIteratorClose = function SetIteratorClose(arg1) {
  /*jshint ignore: start */
  return %SetIteratorClose(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MapInitialize
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MapInitialize = function MapInitialize(arg1) {
  /*jshint ignore: start */
  return %MapInitialize(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MapGet
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.MapGet = function MapGet(arg1, arg2) {
  /*jshint ignore: start */
  return %MapGet(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MapHas
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.MapHas = function MapHas(arg1, arg2) {
  /*jshint ignore: start */
  return %MapHas(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MapDelete
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.MapDelete = function MapDelete(arg1, arg2) {
  /*jshint ignore: start */
  return %MapDelete(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MapClear
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MapClear = function MapClear(arg1) {
  /*jshint ignore: start */
  return %MapClear(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MapSet
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.MapSet = function MapSet(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %MapSet(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MapGetSize
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MapGetSize = function MapGetSize(arg1) {
  /*jshint ignore: start */
  return %MapGetSize(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MapCreateIterator
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.MapCreateIterator = function MapCreateIterator(arg1, arg2) {
  /*jshint ignore: start */
  return %MapCreateIterator(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MapIteratorNext
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MapIteratorNext = function MapIteratorNext(arg1) {
  /*jshint ignore: start */
  return %MapIteratorNext(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MapIteratorClose
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MapIteratorClose = function MapIteratorClose(arg1) {
  /*jshint ignore: start */
  return %MapIteratorClose(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name WeakCollectionInitialize
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.WeakCollectionInitialize = function WeakCollectionInitialize(arg1) {
  /*jshint ignore: start */
  return %WeakCollectionInitialize(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name WeakCollectionGet
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.WeakCollectionGet = function WeakCollectionGet(arg1, arg2) {
  /*jshint ignore: start */
  return %WeakCollectionGet(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name WeakCollectionHas
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.WeakCollectionHas = function WeakCollectionHas(arg1, arg2) {
  /*jshint ignore: start */
  return %WeakCollectionHas(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name WeakCollectionDelete
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.WeakCollectionDelete = function WeakCollectionDelete(arg1, arg2) {
  /*jshint ignore: start */
  return %WeakCollectionDelete(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name WeakCollectionSet
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.WeakCollectionSet = function WeakCollectionSet(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %WeakCollectionSet(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetMicrotaskPending
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SetMicrotaskPending = function SetMicrotaskPending(arg1) {
  /*jshint ignore: start */
  return %SetMicrotaskPending(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name RunMicrotasks
 * @function
 * @return {}
 */
exports.RunMicrotasks = function RunMicrotasks() {
  /*jshint ignore: start */
  return %RunMicrotasks();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsObserved
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.IsObserved = function IsObserved(arg1) {
  /*jshint ignore: start */
  return %IsObserved(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetIsObserved
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SetIsObserved = function SetIsObserved(arg1) {
  /*jshint ignore: start */
  return %SetIsObserved(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetObservationState
 * @function
 * @return {}
 */
exports.GetObservationState = function GetObservationState() {
  /*jshint ignore: start */
  return %GetObservationState();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ObservationWeakMapCreate
 * @function
 * @return {}
 */
exports.ObservationWeakMapCreate = function ObservationWeakMapCreate() {
  /*jshint ignore: start */
  return %ObservationWeakMapCreate();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ObserverObjectAndRecordHaveSameOrigin
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.ObserverObjectAndRecordHaveSameOrigin = function ObserverObjectAndRecordHaveSameOrigin(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %ObserverObjectAndRecordHaveSameOrigin(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ObjectWasCreatedInCurrentOrigin
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ObjectWasCreatedInCurrentOrigin = function ObjectWasCreatedInCurrentOrigin(arg1) {
  /*jshint ignore: start */
  return %ObjectWasCreatedInCurrentOrigin(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ObjectObserveInObjectContext
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.ObjectObserveInObjectContext = function ObjectObserveInObjectContext(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %ObjectObserveInObjectContext(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ObjectGetNotifierInObjectContext
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ObjectGetNotifierInObjectContext = function ObjectGetNotifierInObjectContext(arg1) {
  /*jshint ignore: start */
  return %ObjectGetNotifierInObjectContext(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ObjectNotifierPerformChangeInObjectContext
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.ObjectNotifierPerformChangeInObjectContext = function ObjectNotifierPerformChangeInObjectContext(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %ObjectNotifierPerformChangeInObjectContext(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ArrayBufferInitialize
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.ArrayBufferInitialize = function ArrayBufferInitialize(arg1, arg2) {
  /*jshint ignore: start */
  return %ArrayBufferInitialize(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ArrayBufferSliceImpl
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.ArrayBufferSliceImpl = function ArrayBufferSliceImpl(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %ArrayBufferSliceImpl(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ArrayBufferIsView
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ArrayBufferIsView = function ArrayBufferIsView(arg1) {
  /*jshint ignore: start */
  return %ArrayBufferIsView(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ArrayBufferNeuter
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ArrayBufferNeuter = function ArrayBufferNeuter(arg1) {
  /*jshint ignore: start */
  return %ArrayBufferNeuter(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name TypedArrayInitializeFromArrayLike
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.TypedArrayInitializeFromArrayLike = function TypedArrayInitializeFromArrayLike(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %TypedArrayInitializeFromArrayLike(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name TypedArrayGetBuffer
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.TypedArrayGetBuffer = function TypedArrayGetBuffer(arg1) {
  /*jshint ignore: start */
  return %TypedArrayGetBuffer(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name TypedArraySetFastCases
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.TypedArraySetFastCases = function TypedArraySetFastCases(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %TypedArraySetFastCases(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewGetBuffer
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DataViewGetBuffer = function DataViewGetBuffer(arg1) {
  /*jshint ignore: start */
  return %DataViewGetBuffer(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewGetInt8
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.DataViewGetInt8 = function DataViewGetInt8(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %DataViewGetInt8(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewGetUint8
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.DataViewGetUint8 = function DataViewGetUint8(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %DataViewGetUint8(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewGetInt16
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.DataViewGetInt16 = function DataViewGetInt16(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %DataViewGetInt16(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewGetUint16
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.DataViewGetUint16 = function DataViewGetUint16(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %DataViewGetUint16(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewGetInt32
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.DataViewGetInt32 = function DataViewGetInt32(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %DataViewGetInt32(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewGetUint32
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.DataViewGetUint32 = function DataViewGetUint32(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %DataViewGetUint32(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewGetFloat32
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.DataViewGetFloat32 = function DataViewGetFloat32(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %DataViewGetFloat32(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewGetFloat64
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.DataViewGetFloat64 = function DataViewGetFloat64(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %DataViewGetFloat64(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewSetInt8
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.DataViewSetInt8 = function DataViewSetInt8(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %DataViewSetInt8(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewSetUint8
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.DataViewSetUint8 = function DataViewSetUint8(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %DataViewSetUint8(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewSetInt16
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.DataViewSetInt16 = function DataViewSetInt16(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %DataViewSetInt16(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewSetUint16
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.DataViewSetUint16 = function DataViewSetUint16(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %DataViewSetUint16(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewSetInt32
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.DataViewSetInt32 = function DataViewSetInt32(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %DataViewSetInt32(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewSetUint32
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.DataViewSetUint32 = function DataViewSetUint32(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %DataViewSetUint32(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewSetFloat32
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.DataViewSetFloat32 = function DataViewSetFloat32(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %DataViewSetFloat32(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewSetFloat64
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.DataViewSetFloat64 = function DataViewSetFloat64(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %DataViewSetFloat64(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name NewObjectFromBound
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.NewObjectFromBound = function NewObjectFromBound(arg1) {
  /*jshint ignore: start */
  return %NewObjectFromBound(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name OptimizeObjectForAddingMultipleProperties
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.OptimizeObjectForAddingMultipleProperties = function OptimizeObjectForAddingMultipleProperties(arg1, arg2) {
  /*jshint ignore: start */
  return %OptimizeObjectForAddingMultipleProperties(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugPrint
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DebugPrint = function DebugPrint(arg1) {
  /*jshint ignore: start */
  return %DebugPrint(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GlobalPrint
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GlobalPrint = function GlobalPrint(arg1) {
  /*jshint ignore: start */
  return %GlobalPrint(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugTrace
 * @function
 * @return {}
 */
exports.DebugTrace = function DebugTrace() {
  /*jshint ignore: start */
  return %DebugTrace();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name TraceEnter
 * @function
 * @return {}
 */
exports.TraceEnter = function TraceEnter() {
  /*jshint ignore: start */
  return %TraceEnter();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name TraceExit
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.TraceExit = function TraceExit(arg1) {
  /*jshint ignore: start */
  return %TraceExit(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * BREAKS due to immediate execution
 * 
 * @name Abort
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.Abort = function Abort(arg1) {
  /*jshint ignore: start */
  // return %Abort(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name AbortJS
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.AbortJS = function AbortJS(arg1) {
  /*jshint ignore: start */
  return %AbortJS(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LocalKeys
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.LocalKeys = function LocalKeys(arg1) {
  /*jshint ignore: start */
  return %LocalKeys(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MessageGetStartPosition
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MessageGetStartPosition = function MessageGetStartPosition(arg1) {
  /*jshint ignore: start */
  return %MessageGetStartPosition(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MessageGetScript
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MessageGetScript = function MessageGetScript(arg1) {
  /*jshint ignore: start */
  return %MessageGetScript(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IS_VAR
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.IS_VAR = function IS_VAR(arg1) {
  /*jshint ignore: start */
  return %IS_VAR(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFastSmiElements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFastSmiElements = function HasFastSmiElements(arg1) {
  /*jshint ignore: start */
  return %HasFastSmiElements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFastSmiOrObjectElements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFastSmiOrObjectElements = function HasFastSmiOrObjectElements(arg1) {
  /*jshint ignore: start */
  return %HasFastSmiOrObjectElements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFastObjectElements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFastObjectElements = function HasFastObjectElements(arg1) {
  /*jshint ignore: start */
  return %HasFastObjectElements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFastDoubleElements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFastDoubleElements = function HasFastDoubleElements(arg1) {
  /*jshint ignore: start */
  return %HasFastDoubleElements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFastHoleyElements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFastHoleyElements = function HasFastHoleyElements(arg1) {
  /*jshint ignore: start */
  return %HasFastHoleyElements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasDictionaryElements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasDictionaryElements = function HasDictionaryElements(arg1) {
  /*jshint ignore: start */
  return %HasDictionaryElements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasSloppyArgumentsElements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasSloppyArgumentsElements = function HasSloppyArgumentsElements(arg1) {
  /*jshint ignore: start */
  return %HasSloppyArgumentsElements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasExternalUint8ClampedElements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasExternalUint8ClampedElements = function HasExternalUint8ClampedElements(arg1) {
  /*jshint ignore: start */
  return %HasExternalUint8ClampedElements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasExternalArrayElements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasExternalArrayElements = function HasExternalArrayElements(arg1) {
  /*jshint ignore: start */
  return %HasExternalArrayElements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasExternalInt8Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasExternalInt8Elements = function HasExternalInt8Elements(arg1) {
  /*jshint ignore: start */
  return %HasExternalInt8Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasExternalUint8Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasExternalUint8Elements = function HasExternalUint8Elements(arg1) {
  /*jshint ignore: start */
  return %HasExternalUint8Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasExternalInt16Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasExternalInt16Elements = function HasExternalInt16Elements(arg1) {
  /*jshint ignore: start */
  return %HasExternalInt16Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasExternalUint16Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasExternalUint16Elements = function HasExternalUint16Elements(arg1) {
  /*jshint ignore: start */
  return %HasExternalUint16Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasExternalInt32Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasExternalInt32Elements = function HasExternalInt32Elements(arg1) {
  /*jshint ignore: start */
  return %HasExternalInt32Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasExternalUint32Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasExternalUint32Elements = function HasExternalUint32Elements(arg1) {
  /*jshint ignore: start */
  return %HasExternalUint32Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasExternalFloat32Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasExternalFloat32Elements = function HasExternalFloat32Elements(arg1) {
  /*jshint ignore: start */
  return %HasExternalFloat32Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasExternalFloat64Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasExternalFloat64Elements = function HasExternalFloat64Elements(arg1) {
  /*jshint ignore: start */
  return %HasExternalFloat64Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFixedUint8ClampedElements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFixedUint8ClampedElements = function HasFixedUint8ClampedElements(arg1) {
  /*jshint ignore: start */
  return %HasFixedUint8ClampedElements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFixedInt8Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFixedInt8Elements = function HasFixedInt8Elements(arg1) {
  /*jshint ignore: start */
  return %HasFixedInt8Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFixedUint8Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFixedUint8Elements = function HasFixedUint8Elements(arg1) {
  /*jshint ignore: start */
  return %HasFixedUint8Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFixedInt16Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFixedInt16Elements = function HasFixedInt16Elements(arg1) {
  /*jshint ignore: start */
  return %HasFixedInt16Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFixedUint16Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFixedUint16Elements = function HasFixedUint16Elements(arg1) {
  /*jshint ignore: start */
  return %HasFixedUint16Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFixedInt32Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFixedInt32Elements = function HasFixedInt32Elements(arg1) {
  /*jshint ignore: start */
  return %HasFixedInt32Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFixedUint32Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFixedUint32Elements = function HasFixedUint32Elements(arg1) {
  /*jshint ignore: start */
  return %HasFixedUint32Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFixedFloat32Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFixedFloat32Elements = function HasFixedFloat32Elements(arg1) {
  /*jshint ignore: start */
  return %HasFixedFloat32Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFixedFloat64Elements
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFixedFloat64Elements = function HasFixedFloat64Elements(arg1) {
  /*jshint ignore: start */
  return %HasFixedFloat64Elements(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HasFastProperties
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.HasFastProperties = function HasFastProperties(arg1) {
  /*jshint ignore: start */
  return %HasFastProperties(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name TransitionElementsKind
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.TransitionElementsKind = function TransitionElementsKind(arg1, arg2) {
  /*jshint ignore: start */
  return %TransitionElementsKind(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name HaveSameMap
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.HaveSameMap = function HaveSameMap(arg1, arg2) {
  /*jshint ignore: start */
  return %HaveSameMap(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsJSGlobalProxy
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.IsJSGlobalProxy = function IsJSGlobalProxy(arg1) {
  /*jshint ignore: start */
  return %IsJSGlobalProxy(arg1);
  /*jshint ignore: end */
}

/* Debugger support*/
/**
 * Undocumented
 * 
 * @name DebugBreak
 * @function
 * @return {}
 */
exports.DebugBreak = function DebugBreak() {
  /*jshint ignore: start */
  return %DebugBreak();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetDebugEventListener
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.SetDebugEventListener = function SetDebugEventListener(arg1, arg2) {
  /*jshint ignore: start */
  return %SetDebugEventListener(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name Break
 * @function
 * @return {}
 */
exports.Break = function Break() {
  /*jshint ignore: start */
  return %Break();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugGetPropertyDetails
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.DebugGetPropertyDetails = function DebugGetPropertyDetails(arg1, arg2) {
  /*jshint ignore: start */
  return %DebugGetPropertyDetails(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugGetProperty
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.DebugGetProperty = function DebugGetProperty(arg1, arg2) {
  /*jshint ignore: start */
  return %DebugGetProperty(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugPropertyTypeFromDetails
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DebugPropertyTypeFromDetails = function DebugPropertyTypeFromDetails(arg1) {
  /*jshint ignore: start */
  return %DebugPropertyTypeFromDetails(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugPropertyAttributesFromDetails
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DebugPropertyAttributesFromDetails = function DebugPropertyAttributesFromDetails(arg1) {
  /*jshint ignore: start */
  return %DebugPropertyAttributesFromDetails(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugPropertyIndexFromDetails
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DebugPropertyIndexFromDetails = function DebugPropertyIndexFromDetails(arg1) {
  /*jshint ignore: start */
  return %DebugPropertyIndexFromDetails(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugNamedInterceptorPropertyValue
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.DebugNamedInterceptorPropertyValue = function DebugNamedInterceptorPropertyValue(arg1, arg2) {
  /*jshint ignore: start */
  return %DebugNamedInterceptorPropertyValue(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugIndexedInterceptorElementValue
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.DebugIndexedInterceptorElementValue = function DebugIndexedInterceptorElementValue(arg1, arg2) {
  /*jshint ignore: start */
  return %DebugIndexedInterceptorElementValue(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name CheckExecutionState
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.CheckExecutionState = function CheckExecutionState(arg1) {
  /*jshint ignore: start */
  return %CheckExecutionState(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetFrameCount
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetFrameCount = function GetFrameCount(arg1) {
  /*jshint ignore: start */
  return %GetFrameCount(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetFrameDetails
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GetFrameDetails = function GetFrameDetails(arg1, arg2) {
  /*jshint ignore: start */
  return %GetFrameDetails(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetScopeCount
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GetScopeCount = function GetScopeCount(arg1, arg2) {
  /*jshint ignore: start */
  return %GetScopeCount(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetStepInPositions
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GetStepInPositions = function GetStepInPositions(arg1, arg2) {
  /*jshint ignore: start */
  return %GetStepInPositions(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetScopeDetails
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.GetScopeDetails = function GetScopeDetails(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %GetScopeDetails(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetAllScopesDetails
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.GetAllScopesDetails = function GetAllScopesDetails(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %GetAllScopesDetails(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetFunctionScopeCount
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetFunctionScopeCount = function GetFunctionScopeCount(arg1) {
  /*jshint ignore: start */
  return %GetFunctionScopeCount(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetFunctionScopeDetails
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GetFunctionScopeDetails = function GetFunctionScopeDetails(arg1, arg2) {
  /*jshint ignore: start */
  return %GetFunctionScopeDetails(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetScopeVariableValue
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @param  {} arg5
 * @param  {} arg6
 * @return {}
 */
exports.SetScopeVariableValue = function SetScopeVariableValue(arg1, arg2, arg3, arg4, arg5, arg6) {
  /*jshint ignore: start */
  return %SetScopeVariableValue(arg1, arg2, arg3, arg4, arg5, arg6);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugPrintScopes
 * @function
 * @return {}
 */
exports.DebugPrintScopes = function DebugPrintScopes() {
  /*jshint ignore: start */
  return %DebugPrintScopes();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetThreadCount
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.GetThreadCount = function GetThreadCount(arg1) {
  /*jshint ignore: start */
  return %GetThreadCount(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetThreadDetails
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GetThreadDetails = function GetThreadDetails(arg1, arg2) {
  /*jshint ignore: start */
  return %GetThreadDetails(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetDisableBreak
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SetDisableBreak = function SetDisableBreak(arg1) {
  /*jshint ignore: start */
  return %SetDisableBreak(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * BREAKS due to immediate execution
 * 
 * @name GetBreakLocations
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GetBreakLocations = function GetBreakLocations(arg1, arg2) {
  /*jshint ignore: start */
  // return %GetBreakLocations(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetFunctionBreakPoint
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.SetFunctionBreakPoint = function SetFunctionBreakPoint(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %SetFunctionBreakPoint(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * BREAKS due to immediate execution
 * 
 * @name SetScriptBreakPoint
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.SetScriptBreakPoint = function SetScriptBreakPoint(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  // return %SetScriptBreakPoint(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ClearBreakPoint
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ClearBreakPoint = function ClearBreakPoint(arg1) {
  /*jshint ignore: start */
  return %ClearBreakPoint(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ChangeBreakOnException
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.ChangeBreakOnException = function ChangeBreakOnException(arg1, arg2) {
  /*jshint ignore: start */
  return %ChangeBreakOnException(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsBreakOnException
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.IsBreakOnException = function IsBreakOnException(arg1) {
  /*jshint ignore: start */
  return %IsBreakOnException(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * BREAKS due to immediate execution
 * 
 * @name PrepareStep
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.PrepareStep = function PrepareStep(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  // return %PrepareStep(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ClearStepping
 * @function
 * @return {}
 */
exports.ClearStepping = function ClearStepping() {
  /*jshint ignore: start */
  return %ClearStepping();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugEvaluate
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @param  {} arg5
 * @param  {} arg6
 * @return {}
 */
exports.DebugEvaluate = function DebugEvaluate(arg1, arg2, arg3, arg4, arg5, arg6) {
  /*jshint ignore: start */
  return %DebugEvaluate(arg1, arg2, arg3, arg4, arg5, arg6);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugEvaluateGlobal
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.DebugEvaluateGlobal = function DebugEvaluateGlobal(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %DebugEvaluateGlobal(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugGetLoadedScripts
 * @function
 * @return {}
 */
exports.DebugGetLoadedScripts = function DebugGetLoadedScripts() {
  /*jshint ignore: start */
  return %DebugGetLoadedScripts();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugReferencedBy
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.DebugReferencedBy = function DebugReferencedBy(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %DebugReferencedBy(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugConstructedBy
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.DebugConstructedBy = function DebugConstructedBy(arg1, arg2) {
  /*jshint ignore: start */
  return %DebugConstructedBy(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugGetPrototype
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DebugGetPrototype = function DebugGetPrototype(arg1) {
  /*jshint ignore: start */
  return %DebugGetPrototype(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugSetScriptSource
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.DebugSetScriptSource = function DebugSetScriptSource(arg1, arg2) {
  /*jshint ignore: start */
  return %DebugSetScriptSource(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SystemBreak
 * @function
 * @return {}
 */
exports.SystemBreak = function SystemBreak() {
  /*jshint ignore: start */
  return %SystemBreak();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugDisassembleFunction
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DebugDisassembleFunction = function DebugDisassembleFunction(arg1) {
  /*jshint ignore: start */
  return %DebugDisassembleFunction(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugDisassembleConstructor
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DebugDisassembleConstructor = function DebugDisassembleConstructor(arg1) {
  /*jshint ignore: start */
  return %DebugDisassembleConstructor(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name FunctionGetInferredName
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.FunctionGetInferredName = function FunctionGetInferredName(arg1) {
  /*jshint ignore: start */
  return %FunctionGetInferredName(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LiveEditFindSharedFunctionInfosForScript
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.LiveEditFindSharedFunctionInfosForScript = function LiveEditFindSharedFunctionInfosForScript(arg1) {
  /*jshint ignore: start */
  return %LiveEditFindSharedFunctionInfosForScript(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LiveEditGatherCompileInfo
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.LiveEditGatherCompileInfo = function LiveEditGatherCompileInfo(arg1, arg2) {
  /*jshint ignore: start */
  return %LiveEditGatherCompileInfo(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LiveEditReplaceScript
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.LiveEditReplaceScript = function LiveEditReplaceScript(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %LiveEditReplaceScript(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LiveEditReplaceFunctionCode
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.LiveEditReplaceFunctionCode = function LiveEditReplaceFunctionCode(arg1, arg2) {
  /*jshint ignore: start */
  return %LiveEditReplaceFunctionCode(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LiveEditFunctionSourceUpdated
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.LiveEditFunctionSourceUpdated = function LiveEditFunctionSourceUpdated(arg1) {
  /*jshint ignore: start */
  return %LiveEditFunctionSourceUpdated(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LiveEditFunctionSetScript
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.LiveEditFunctionSetScript = function LiveEditFunctionSetScript(arg1, arg2) {
  /*jshint ignore: start */
  return %LiveEditFunctionSetScript(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LiveEditReplaceRefToNestedFunction
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.LiveEditReplaceRefToNestedFunction = function LiveEditReplaceRefToNestedFunction(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %LiveEditReplaceRefToNestedFunction(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LiveEditPatchFunctionPositions
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.LiveEditPatchFunctionPositions = function LiveEditPatchFunctionPositions(arg1, arg2) {
  /*jshint ignore: start */
  return %LiveEditPatchFunctionPositions(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LiveEditCheckAndDropActivations
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.LiveEditCheckAndDropActivations = function LiveEditCheckAndDropActivations(arg1, arg2) {
  /*jshint ignore: start */
  return %LiveEditCheckAndDropActivations(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LiveEditCompareStrings
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.LiveEditCompareStrings = function LiveEditCompareStrings(arg1, arg2) {
  /*jshint ignore: start */
  return %LiveEditCompareStrings(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name LiveEditRestartFrame
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.LiveEditRestartFrame = function LiveEditRestartFrame(arg1, arg2) {
  /*jshint ignore: start */
  return %LiveEditRestartFrame(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetFunctionCodePositionFromSource
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GetFunctionCodePositionFromSource = function GetFunctionCodePositionFromSource(arg1, arg2) {
  /*jshint ignore: start */
  return %GetFunctionCodePositionFromSource(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ExecuteInDebugContext
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.ExecuteInDebugContext = function ExecuteInDebugContext(arg1, arg2) {
  /*jshint ignore: start */
  return %ExecuteInDebugContext(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name SetFlags
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.SetFlags = function SetFlags(arg1) {
  /*jshint ignore: start */
  return %SetFlags(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name CollectGarbage
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.CollectGarbage = function CollectGarbage(arg1) {
  /*jshint ignore: start */
  return %CollectGarbage(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GetHeapUsage
 * @function
 * @return {}
 */
exports.GetHeapUsage = function GetHeapUsage() {
  /*jshint ignore: start */
  return %GetHeapUsage();
  /*jshint ignore: end */
}

// INLINE_FUNCTION_LIST defines all inlined functions accessed
// with a native call of the form %_name from within JS code.
/**
 * Undocumented
 * 
 * @name _IsSmi
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._IsSmi = function _IsSmi(arg1) {
  /*jshint ignore: start */
  return %_IsSmi(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _IsNonNegativeSmi
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._IsNonNegativeSmi = function _IsNonNegativeSmi(arg1) {
  /*jshint ignore: start */
  return %_IsNonNegativeSmi(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _IsArray
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._IsArray = function _IsArray(arg1) {
  /*jshint ignore: start */
  return %_IsArray(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _IsRegExp
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._IsRegExp = function _IsRegExp(arg1) {
  /*jshint ignore: start */
  return %_IsRegExp(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _IsConstructCall
 * @function
 * @return {}
 */
exports._IsConstructCall = function _IsConstructCall() {
  /*jshint ignore: start */
  return %_IsConstructCall();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _ArgumentsLength
 * @function
 * @return {}
 */
exports._ArgumentsLength = function _ArgumentsLength() {
  /*jshint ignore: start */
  return %_ArgumentsLength();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _Arguments
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._Arguments = function _Arguments(arg1) {
  /*jshint ignore: start */
  return %_Arguments(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _ValueOf
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._ValueOf = function _ValueOf(arg1) {
  /*jshint ignore: start */
  return %_ValueOf(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _SetValueOf
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports._SetValueOf = function _SetValueOf(arg1, arg2) {
  /*jshint ignore: start */
  return %_SetValueOf(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _StringCharFromCode
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._StringCharFromCode = function _StringCharFromCode(arg1) {
  /*jshint ignore: start */
  return %_StringCharFromCode(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _StringCharAt
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports._StringCharAt = function _StringCharAt(arg1, arg2) {
  /*jshint ignore: start */
  return %_StringCharAt(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name OneByteSeqStringSetChar
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.OneByteSeqStringSetChar = function OneByteSeqStringSetChar(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %OneByteSeqStringSetChar(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name TwoByteSeqStringSetChar
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports.TwoByteSeqStringSetChar = function TwoByteSeqStringSetChar(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %TwoByteSeqStringSetChar(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _ObjectEquals
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports._ObjectEquals = function _ObjectEquals(arg1, arg2) {
  /*jshint ignore: start */
  return %_ObjectEquals(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _IsObject
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._IsObject = function _IsObject(arg1) {
  /*jshint ignore: start */
  return %_IsObject(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _IsFunction
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._IsFunction = function _IsFunction(arg1) {
  /*jshint ignore: start */
  return %_IsFunction(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _IsUndetectableObject
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._IsUndetectableObject = function _IsUndetectableObject(arg1) {
  /*jshint ignore: start */
  return %_IsUndetectableObject(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _IsSpecObject
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._IsSpecObject = function _IsSpecObject(arg1) {
  /*jshint ignore: start */
  return %_IsSpecObject(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _IsStringWrapperSafeForDefaultValueOf
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._IsStringWrapperSafeForDefaultValueOf = function _IsStringWrapperSafeForDefaultValueOf(arg1) {
  /*jshint ignore: start */
  return %_IsStringWrapperSafeForDefaultValueOf(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _MathPow
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports._MathPow = function _MathPow(arg1, arg2) {
  /*jshint ignore: start */
  return %_MathPow(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name IsMinusZero
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.IsMinusZero = function IsMinusZero(arg1) {
  /*jshint ignore: start */
  return %IsMinusZero(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _HasCachedArrayIndex
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._HasCachedArrayIndex = function _HasCachedArrayIndex(arg1) {
  /*jshint ignore: start */
  return %_HasCachedArrayIndex(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _GetCachedArrayIndex
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._GetCachedArrayIndex = function _GetCachedArrayIndex(arg1) {
  /*jshint ignore: start */
  return %_GetCachedArrayIndex(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _FastAsciiArrayJoin
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports._FastAsciiArrayJoin = function _FastAsciiArrayJoin(arg1, arg2) {
  /*jshint ignore: start */
  return %_FastAsciiArrayJoin(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name GeneratorNext
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GeneratorNext = function GeneratorNext(arg1, arg2) {
  /*jshint ignore: start */
  return %GeneratorNext(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _GeneratorThrow
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.GeneratorThrow = function GeneratorThrow(arg1, arg2) {
  /*jshint ignore: start */
  return %GeneratorThrow(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugBreakInOptimizedCode
 * @function
 * @return {}
 */
exports.DebugBreakInOptimizedCode = function DebugBreakInOptimizedCode() {
  /*jshint ignore: start */
  return %DebugBreakInOptimizedCode();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _ClassOf
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._ClassOf = function _ClassOf(arg1) {
  /*jshint ignore: start */
  return %_ClassOf(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _StringCharCodeAt
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports._StringCharCodeAt = function _StringCharCodeAt(arg1, arg2) {
  /*jshint ignore: start */
  return %_StringCharCodeAt(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _StringAdd
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports._StringAdd = function _StringAdd(arg1, arg2) {
  /*jshint ignore: start */
  return %_StringAdd(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _SubString
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports._SubString = function _SubString(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %_SubString(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _StringCompare
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports._StringCompare = function _StringCompare(arg1, arg2) {
  /*jshint ignore: start */
  return %_StringCompare(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _RegExpExec
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports._RegExpExec = function _RegExpExec(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %_RegExpExec(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _RegExpConstructResult
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @return {}
 */
exports._RegExpConstructResult = function _RegExpConstructResult(arg1, arg2, arg3) {
  /*jshint ignore: start */
  return %_RegExpConstructResult(arg1, arg2, arg3);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _GetFromCache
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports._GetFromCache = function _GetFromCache(arg1, arg2) {
  /*jshint ignore: start */
  return %_GetFromCache(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name _NumberToString
 * @function
 * @param  {} arg1
 * @return {}
 */
exports._NumberToString = function _NumberToString(arg1) {
  /*jshint ignore: start */
  return %_NumberToString(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name TypedArrayInitialize
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @param  {} arg5
 * @return {}
 */
exports.TypedArrayInitialize = function TypedArrayInitialize(arg1, arg2, arg3, arg4, arg5) {
  /*jshint ignore: start */
  return %TypedArrayInitialize(arg1, arg2, arg3, arg4, arg5);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DataViewInitialize
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @param  {} arg3
 * @param  {} arg4
 * @return {}
 */
exports.DataViewInitialize = function DataViewInitialize(arg1, arg2, arg3, arg4) {
  /*jshint ignore: start */
  return %DataViewInitialize(arg1, arg2, arg3, arg4);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MaxSmi
 * @function
 * @return {}
 */
exports.MaxSmi = function MaxSmi() {
  /*jshint ignore: start */
  return %MaxSmi();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name TypedArrayMaxSizeInHeap
 * @function
 * @return {}
 */
exports.TypedArrayMaxSizeInHeap = function TypedArrayMaxSizeInHeap() {
  /*jshint ignore: start */
  return %TypedArrayMaxSizeInHeap();
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ArrayBufferViewGetByteLength
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ArrayBufferViewGetByteLength = function ArrayBufferViewGetByteLength(arg1) {
  /*jshint ignore: start */
  return %ArrayBufferViewGetByteLength(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ArrayBufferViewGetByteOffset
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ArrayBufferViewGetByteOffset = function ArrayBufferViewGetByteOffset(arg1) {
  /*jshint ignore: start */
  return %ArrayBufferViewGetByteOffset(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name TypedArrayGetLength
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.TypedArrayGetLength = function TypedArrayGetLength(arg1) {
  /*jshint ignore: start */
  return %TypedArrayGetLength(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ArrayBufferGetByteLength
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.ArrayBufferGetByteLength = function ArrayBufferGetByteLength(arg1) {
  /*jshint ignore: start */
  return %ArrayBufferGetByteLength(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name ConstructDouble
 * @function
 * @param  {} arg1
 * @param  {} arg2
 * @return {}
 */
exports.ConstructDouble = function ConstructDouble(arg1, arg2) {
  /*jshint ignore: start */
  return %ConstructDouble(arg1, arg2);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DoubleHi
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DoubleHi = function DoubleHi(arg1) {
  /*jshint ignore: start */
  return %DoubleHi(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DoubleLo
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DoubleLo = function DoubleLo(arg1) {
  /*jshint ignore: start */
  return %DoubleLo(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MathSqrt
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MathSqrt = function MathSqrt(arg1) {
  /*jshint ignore: start */
  return %MathSqrt(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name MathLog
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.MathLog = function MathLog(arg1) {
  /*jshint ignore: start */
  return %MathLog(arg1);
  /*jshint ignore: end */
}

/**
 * Undocumented
 * 
 * @name DebugCallbackSupportsStepping
 * @function
 * @param  {} arg1
 * @return {}
 */
exports.DebugCallbackSupportsStepping = function DebugCallbackSupportsStepping(arg1) {
  /*jshint ignore: start */
  return %DebugCallbackSupportsStepping(arg1);
  /*jshint ignore: end */
}
