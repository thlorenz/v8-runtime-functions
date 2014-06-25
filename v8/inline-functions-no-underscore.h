// ----------------------------------------------------------------------------
// INLINE_FUNCTION_LIST defines all inlined functions accessed
// with a native call of the form %_name from within JS code.
// Entries have the form F(name, number of arguments, number of return values).
#define INLINE_FUNCTION_LIST(F) \
  F(OneByteSeqStringSetChar, 3, 1)                                           \
  F(TwoByteSeqStringSetChar, 3, 1)                                           \
  F(IsMinusZero, 1, 1)                                                       \
  F(GeneratorNext, 2, 1)                                                     \
  F(GeneratorThrow, 2, 1)                                                    \
  F(DebugBreakInOptimizedCode, 0, 1)                                         \

// ----------------------------------------------------------------------------
// INLINE_OPTIMIZED_FUNCTION_LIST defines all inlined functions accessed
// with a native call of the form %_name from within JS code that also have
// a corresponding runtime function, that is called from non-optimized code.
// Entries have the form F(name, number of arguments, number of return values).
#define INLINE_OPTIMIZED_FUNCTION_LIST(F) \
  /* Typed Arrays */                                                         \
  F(TypedArrayInitialize, 5, 1)                                              \
  F(DataViewInitialize, 4, 1)                                                \
  F(MaxSmi, 0, 1)                                                            \
  F(TypedArrayMaxSizeInHeap, 0, 1)                                           \
  F(ArrayBufferViewGetByteLength, 1, 1)                                      \
  F(ArrayBufferViewGetByteOffset, 1, 1)                                      \
  F(TypedArrayGetLength, 1, 1)                                               \
  /* ArrayBuffer */                                                          \
  F(ArrayBufferGetByteLength, 1, 1)                                          \
  /* Maths */                                                                \
  F(ConstructDouble, 2, 1)                                                   \
  F(DoubleHi, 1, 1)                                                          \
  F(DoubleLo, 1, 1)                                                          \
  F(MathSqrt, 1, 1)                                                          \
  F(MathLog, 1, 1)                                                           \
  /* Debugger */                                                             \
  F(DebugCallbackSupportsStepping, 1, 1)

