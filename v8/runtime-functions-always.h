// from runtime.h

// The interface to C++ runtime functions.

// ----------------------------------------------------------------------------
// RUNTIME_FUNCTION_LIST_ALWAYS defines runtime calls available in both
// release and debug mode.
// This macro should only be used by the macro RUNTIME_FUNCTION_LIST.

// WARNING: RUNTIME_FUNCTION_LIST_ALWAYS_* is a very large macro that caused
// MSVC Intellisense to crash.  It was broken into two macros to work around
// this problem. Please avoid large recursive macros whenever possible.
#define RUNTIME_FUNCTION_LIST_ALWAYS_1(F) \
  /* Property access */ \
  F(GetProperty, 2, 1) \
  F(KeyedGetProperty, 2, 1) \
  F(DeleteProperty, 3, 1) \
  F(HasLocalProperty, 2, 1) \
  F(HasProperty, 2, 1) \
  F(HasElement, 2, 1) \
  F(IsPropertyEnumerable, 2, 1) \
  F(GetPropertyNames, 1, 1) \
  F(GetPropertyNamesFast, 1, 1) \
  F(GetLocalPropertyNames, 2, 1) \
  F(GetLocalElementNames, 1, 1) \
  F(GetInterceptorInfo, 1, 1) \
  F(GetNamedInterceptorPropertyNames, 1, 1) \
  F(GetIndexedInterceptorElementNames, 1, 1) \
  F(GetArgumentsProperty, 1, 1) \
  F(ToFastProperties, 1, 1) \
  F(FinishArrayPrototypeSetup, 1, 1) \
  F(SpecialArrayFunctions, 1, 1) \
  F(IsSloppyModeFunction, 1, 1) \
  F(GetDefaultReceiver, 1, 1) \
  \
  F(GetPrototype, 1, 1) \
  F(SetPrototype, 2, 1) \
  F(IsInPrototypeChain, 2, 1) \
  \
  F(GetOwnProperty, 2, 1) \
  \
  F(IsExtensible, 1, 1) \
  F(PreventExtensions, 1, 1)\
  \
  /* Utilities */ \
  F(CheckIsBootstrapping, 0, 1) \
  F(GetRootNaN, 0, 1) \
  F(Call, -1 /* >= 2 */, 1) \
  F(Apply, 5, 1) \
  F(GetFunctionDelegate, 1, 1) \
  F(GetConstructorDelegate, 1, 1) \
  F(DeoptimizeFunction, 1, 1) \
  F(ClearFunctionTypeFeedback, 1, 1) \
  F(RunningInSimulator, 0, 1) \
  F(IsConcurrentRecompilationSupported, 0, 1) \
  F(OptimizeFunctionOnNextCall, -1, 1) \
  F(NeverOptimizeFunction, 1, 1) \
  F(GetOptimizationStatus, -1, 1) \
  F(GetOptimizationCount, 1, 1) \
  F(UnblockConcurrentRecompilation, 0, 1) \
  F(CompileForOnStackReplacement, 1, 1) \
  F(SetAllocationTimeout, -1 /* 2 || 3 */, 1) \
  F(SetNativeFlag, 1, 1) \
  F(SetInlineBuiltinFlag, 1, 1) \
  F(StoreArrayLiteralElement, 5, 1) \
  F(DebugPrepareStepInIfStepping, 1, 1) \
  F(DebugPromiseHandlePrologue, 1, 1) \
  F(DebugPromiseHandleEpilogue, 0, 1) \
  F(FlattenString, 1, 1) \
  F(LoadMutableDouble, 2, 1) \
  F(TryMigrateInstance, 1, 1) \
  F(NotifyContextDisposed, 0, 1) \
  \
  /* Array join support */ \
  F(PushIfAbsent, 2, 1) \
  F(ArrayConcat, 1, 1) \
  \
  /* Conversions */ \
  F(ToBool, 1, 1) \
  F(Typeof, 1, 1) \
  \
  F(StringToNumber, 1, 1) \
  F(StringParseInt, 2, 1) \
  F(StringParseFloat, 1, 1) \
  F(StringToLowerCase, 1, 1) \
  F(StringToUpperCase, 1, 1) \
  F(StringSplit, 3, 1) \
  F(CharFromCode, 1, 1) \
  F(URIEscape, 1, 1) \
  F(URIUnescape, 1, 1) \
  \
  F(NumberToInteger, 1, 1) \
  F(NumberToIntegerMapMinusZero, 1, 1) \
  F(NumberToJSUint32, 1, 1) \
  F(NumberToJSInt32, 1, 1) \
  \
  /* Arithmetic operations */ \
  F(NumberAdd, 2, 1) \
  F(NumberSub, 2, 1) \
  F(NumberMul, 2, 1) \
  F(NumberDiv, 2, 1) \
  F(NumberMod, 2, 1) \
  F(NumberUnaryMinus, 1, 1) \
  F(NumberImul, 2, 1) \
  \
  F(StringBuilderConcat, 3, 1) \
  F(StringBuilderJoin, 3, 1) \
  F(SparseJoinWithSeparator, 3, 1) \
  \
  /* Bit operations */ \
  F(NumberOr, 2, 1) \
  F(NumberAnd, 2, 1) \
  F(NumberXor, 2, 1) \
  \
  F(NumberShl, 2, 1) \
  F(NumberShr, 2, 1) \
  F(NumberSar, 2, 1) \
  \
  /* Comparisons */ \
  F(NumberEquals, 2, 1) \
  F(StringEquals, 2, 1) \
  \
  F(NumberCompare, 3, 1) \
  F(SmiLexicographicCompare, 2, 1) \
  \
  /* Math */ \
  F(MathAcos, 1, 1) \
  F(MathAsin, 1, 1) \
  F(MathAtan, 1, 1) \
  F(MathFloor, 1, 1) \
  F(MathAtan2, 2, 1) \
  F(MathExp, 1, 1) \
  F(RoundNumber, 1, 1) \
  F(MathFround, 1, 1) \
  \
  /* Regular expressions */ \
  F(RegExpCompile, 3, 1) \
  F(RegExpExecMultiple, 4, 1) \
  F(RegExpInitializeObject, 5, 1) \
  \
  /* JSON */ \
  F(ParseJson, 1, 1) \
  F(BasicJSONStringify, 1, 1) \
  F(QuoteJSONString, 1, 1) \
  \
  /* Strings */ \
  F(StringIndexOf, 3, 1) \
  F(StringLastIndexOf, 3, 1) \
  F(StringLocaleCompare, 2, 1) \
  F(StringReplaceGlobalRegExpWithString, 4, 1) \
  F(StringReplaceOneCharWithString, 3, 1) \
  F(StringMatch, 3, 1) \
  F(StringTrim, 3, 1) \
  F(StringToArray, 2, 1) \
  F(NewStringWrapper, 1, 1) \
  F(NewString, 2, 1) \
  F(TruncateString, 2, 1) \
  \
  /* Numbers */ \
  F(NumberToRadixString, 2, 1) \
  F(NumberToFixed, 2, 1) \
  F(NumberToExponential, 2, 1) \
  F(NumberToPrecision, 2, 1) \
  F(IsValidSmi, 1, 1)


#define RUNTIME_FUNCTION_LIST_ALWAYS_2(F) \
  /* Reflection */ \
  F(FunctionSetInstanceClassName, 2, 1) \
  F(FunctionSetLength, 2, 1) \
  F(FunctionSetPrototype, 2, 1) \
  F(FunctionSetReadOnlyPrototype, 1, 1) \
  F(FunctionGetName, 1, 1) \
  F(FunctionSetName, 2, 1) \
  F(FunctionNameShouldPrintAsAnonymous, 1, 1) \
  F(FunctionMarkNameShouldPrintAsAnonymous, 1, 1) \
  F(FunctionIsGenerator, 1, 1) \
  F(FunctionBindArguments, 4, 1) \
  F(BoundFunctionGetBindings, 1, 1) \
  F(FunctionRemovePrototype, 1, 1) \
  F(FunctionGetSourceCode, 1, 1) \
  F(FunctionGetScript, 1, 1) \
  F(FunctionGetScriptSourcePosition, 1, 1) \
  F(FunctionGetPositionForOffset, 2, 1) \
  F(FunctionIsAPIFunction, 1, 1) \
  F(FunctionIsBuiltin, 1, 1) \
  F(GetScript, 1, 1) \
  F(CollectStackTrace, 3, 1) \
  F(GetAndClearOverflowedStackTrace, 1, 1) \
  F(GetV8Version, 0, 1) \
  \
  F(SetCode, 2, 1) \
  F(SetExpectedNumberOfProperties, 2, 1) \
  \
  F(CreateApiFunction, 2, 1) \
  F(IsTemplate, 1, 1) \
  F(GetTemplateField, 2, 1) \
  F(DisableAccessChecks, 1, 1) \
  F(EnableAccessChecks, 1, 1) \
  F(SetAccessorProperty, 6, 1) \
  \
  /* Dates */ \
  F(DateCurrentTime, 0, 1) \
  F(DateParseString, 2, 1) \
  F(DateLocalTimezone, 1, 1) \
  F(DateToUTC, 1, 1) \
  F(DateMakeDay, 2, 1) \
  F(DateSetValue, 3, 1) \
  F(DateCacheVersion, 0, 1) \
  \
  /* Globals */ \
  F(CompileString, 2, 1) \
  \
  /* Eval */ \
  F(GlobalReceiver, 1, 1) \
  F(IsAttachedGlobal, 1, 1) \
  \
  F(SetProperty, -1 /* 4 or 5 */, 1) \
  F(DefineOrRedefineDataProperty, 4, 1) \
  F(DefineOrRedefineAccessorProperty, 5, 1) \
  F(IgnoreAttributesAndSetProperty, -1 /* 3 or 4 */, 1) \
  F(GetDataProperty, 2, 1) \
  F(SetHiddenProperty, 3, 1) \
  \
  /* Arrays */ \
  F(RemoveArrayHoles, 2, 1) \
  F(GetArrayKeys, 2, 1) \
  F(MoveArrayContents, 2, 1) \
  F(EstimateNumberOfElements, 1, 1) \
  \
  /* Getters and Setters */ \
  F(LookupAccessor, 3, 1) \
  \
  /* ES5 */ \
  F(ObjectFreeze, 1, 1) \
  \
  /* Harmony microtasks */ \
  F(GetMicrotaskState, 0, 1) \
  \
  /* Harmony modules */ \
  F(IsJSModule, 1, 1) \
  \
  /* Harmony symbols */ \
  F(CreateSymbol, 1, 1) \
  F(CreatePrivateSymbol, 1, 1) \
  F(CreateGlobalPrivateSymbol, 1, 1) \
  F(NewSymbolWrapper, 1, 1) \
  F(SymbolDescription, 1, 1) \
  F(SymbolRegistry, 0, 1) \
  F(SymbolIsPrivate, 1, 1) \
  \
  /* Harmony proxies */ \
  F(CreateJSProxy, 2, 1) \
  F(CreateJSFunctionProxy, 4, 1) \
  F(IsJSProxy, 1, 1) \
  F(IsJSFunctionProxy, 1, 1) \
  F(GetHandler, 1, 1) \
  F(GetCallTrap, 1, 1) \
  F(GetConstructTrap, 1, 1) \
  F(Fix, 1, 1) \
  \
  /* Harmony sets */ \
  F(SetInitialize, 1, 1) \
  F(SetAdd, 2, 1) \
  F(SetHas, 2, 1) \
  F(SetDelete, 2, 1) \
  F(SetClear, 1, 1) \
  F(SetGetSize, 1, 1) \
  F(SetCreateIterator, 2, 1) \
  \
  F(SetIteratorNext, 1, 1) \
  F(SetIteratorClose, 1, 1) \
  \
  /* Harmony maps */ \
  F(MapInitialize, 1, 1) \
  F(MapGet, 2, 1) \
  F(MapHas, 2, 1) \
  F(MapDelete, 2, 1) \
  F(MapClear, 1, 1) \
  F(MapSet, 3, 1) \
  F(MapGetSize, 1, 1) \
  F(MapCreateIterator, 2, 1) \
  \
  F(MapIteratorNext, 1, 1) \
  F(MapIteratorClose, 1, 1) \
  \
  /* Harmony weak maps and sets */ \
  F(WeakCollectionInitialize, 1, 1) \
  F(WeakCollectionGet, 2, 1) \
  F(WeakCollectionHas, 2, 1) \
  F(WeakCollectionDelete, 2, 1) \
  F(WeakCollectionSet, 3, 1) \
  \
  /* Harmony events */ \
  F(SetMicrotaskPending, 1, 1) \
  F(RunMicrotasks, 0, 1) \
  \
  /* Harmony observe */ \
  F(IsObserved, 1, 1) \
  F(SetIsObserved, 1, 1) \
  F(GetObservationState, 0, 1) \
  F(ObservationWeakMapCreate, 0, 1) \
  F(ObserverObjectAndRecordHaveSameOrigin, 3, 1) \
  F(ObjectWasCreatedInCurrentOrigin, 1, 1) \
  F(ObjectObserveInObjectContext, 3, 1) \
  F(ObjectGetNotifierInObjectContext, 1, 1) \
  F(ObjectNotifierPerformChangeInObjectContext, 3, 1) \
  \
  /* Harmony typed arrays */ \
  F(ArrayBufferInitialize, 2, 1)\
  F(ArrayBufferSliceImpl, 3, 1) \
  F(ArrayBufferIsView, 1, 1) \
  F(ArrayBufferNeuter, 1, 1) \
  \
  F(TypedArrayInitializeFromArrayLike, 4, 1) \
  F(TypedArrayGetBuffer, 1, 1) \
  F(TypedArraySetFastCases, 3, 1) \
  \
  F(DataViewGetBuffer, 1, 1) \
  F(DataViewGetInt8, 3, 1) \
  F(DataViewGetUint8, 3, 1) \
  F(DataViewGetInt16, 3, 1) \
  F(DataViewGetUint16, 3, 1) \
  F(DataViewGetInt32, 3, 1) \
  F(DataViewGetUint32, 3, 1) \
  F(DataViewGetFloat32, 3, 1) \
  F(DataViewGetFloat64, 3, 1) \
  \
  F(DataViewSetInt8, 4, 1) \
  F(DataViewSetUint8, 4, 1) \
  F(DataViewSetInt16, 4, 1) \
  F(DataViewSetUint16, 4, 1) \
  F(DataViewSetInt32, 4, 1) \
  F(DataViewSetUint32, 4, 1) \
  F(DataViewSetFloat32, 4, 1) \
  F(DataViewSetFloat64, 4, 1) \
  \
  /* Statements */ \
  F(NewObjectFromBound, 1, 1) \
  \
  /* Declarations and initialization */ \
  F(InitializeVarGlobal, -1 /* 2 or 3 */, 1) \
  F(OptimizeObjectForAddingMultipleProperties, 2, 1) \
  \
  /* Debugging */ \
  F(DebugPrint, 1, 1) \
  F(GlobalPrint, 1, 1) \
  F(DebugTrace, 0, 1) \
  F(TraceEnter, 0, 1) \
  F(TraceExit, 1, 1) \
  F(Abort, 1, 1) \
  F(AbortJS, 1, 1) \
  /* ES5 */ \
  F(LocalKeys, 1, 1) \
  \
  /* Message objects */ \
  F(MessageGetStartPosition, 1, 1) \
  F(MessageGetScript, 1, 1) \
  \
  /* Pseudo functions - handled as macros by parser */ \
  F(IS_VAR, 1, 1) \
  \
  /* expose boolean functions from objects-inl.h */ \
  F(HasFastSmiElements, 1, 1) \
  F(HasFastSmiOrObjectElements, 1, 1) \
  F(HasFastObjectElements, 1, 1) \
  F(HasFastDoubleElements, 1, 1) \
  F(HasFastHoleyElements, 1, 1) \
  F(HasDictionaryElements, 1, 1) \
  F(HasSloppyArgumentsElements, 1, 1) \
  F(HasExternalUint8ClampedElements, 1, 1) \
  F(HasExternalArrayElements, 1, 1) \
  F(HasExternalInt8Elements, 1, 1) \
  F(HasExternalUint8Elements, 1, 1) \
  F(HasExternalInt16Elements, 1, 1) \
  F(HasExternalUint16Elements, 1, 1) \
  F(HasExternalInt32Elements, 1, 1) \
  F(HasExternalUint32Elements, 1, 1) \
  F(HasExternalFloat32Elements, 1, 1) \
  F(HasExternalFloat64Elements, 1, 1) \
  F(HasFixedUint8ClampedElements, 1, 1) \
  F(HasFixedInt8Elements, 1, 1) \
  F(HasFixedUint8Elements, 1, 1) \
  F(HasFixedInt16Elements, 1, 1) \
  F(HasFixedUint16Elements, 1, 1) \
  F(HasFixedInt32Elements, 1, 1) \
  F(HasFixedUint32Elements, 1, 1) \
  F(HasFixedFloat32Elements, 1, 1) \
  F(HasFixedFloat64Elements, 1, 1) \
  F(HasFastProperties, 1, 1) \
  F(TransitionElementsKind, 2, 1) \
  F(HaveSameMap, 2, 1) \
  F(IsJSGlobalProxy, 1, 1)


