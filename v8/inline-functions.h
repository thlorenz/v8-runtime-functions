// ----------------------------------------------------------------------------
// INLINE_FUNCTION_LIST defines all inlined functions accessed
// with a native call of the form %_name from within JS code.
// Entries have the form F(name, number of arguments, number of return values).
#define INLINE_FUNCTION_LIST(F) \
  F(IsSmi, 1, 1)                                                             \
  F(IsNonNegativeSmi, 1, 1)                                                  \
  F(IsArray, 1, 1)                                                           \
  F(IsRegExp, 1, 1)                                                          \
  F(IsConstructCall, 0, 1)                                                   \
  F(CallFunction, -1 /* receiver + n args + function */, 1)                  \
  F(ArgumentsLength, 0, 1)                                                   \
  F(Arguments, 1, 1)                                                         \
  F(ValueOf, 1, 1)                                                           \
  F(SetValueOf, 2, 1)                                                        \
  F(DateField, 2 /* date object, field index */, 1)                          \
  F(StringCharFromCode, 1, 1)                                                \
  F(StringCharAt, 2, 1)                                                      \
  F(ObjectEquals, 2, 1)                                                      \
  F(IsObject, 1, 1)                                                          \
  F(IsFunction, 1, 1)                                                        \
  F(IsUndetectableObject, 1, 1)                                              \
  F(IsSpecObject, 1, 1)                                                      \
  F(IsStringWrapperSafeForDefaultValueOf, 1, 1)                              \
  F(MathPow, 2, 1)                                                           \
  F(HasCachedArrayIndex, 1, 1)                                               \
  F(GetCachedArrayIndex, 1, 1)                                               \
  F(FastAsciiArrayJoin, 2, 1)                                                \
  F(ClassOf, 1, 1)                                                           \
  F(StringCharCodeAt, 2, 1)                                                  \
  F(StringAdd, 2, 1)                                                         \
  F(SubString, 3, 1)                                                         \
  F(StringCompare, 2, 1)                                                     \
  F(RegExpExec, 4, 1)                                                        \
  F(RegExpConstructResult, 3, 1)                                             \
  F(GetFromCache, 2, 1)                                                      \
  F(NumberToString, 1, 1)

