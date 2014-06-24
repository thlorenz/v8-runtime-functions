// src/objects.h

  // [elements]: The elements (properties with names that are integers).
  //
  // Elements can be in two general modes: fast and slow. Each mode
  // corrensponds to a set of object representations of elements that
  // have something in common.
  //
  // In the fast mode elements is a FixedArray and so each element can
  // be quickly accessed. This fact is used in the generated code. The
  // elements array can have one of three maps in this mode:
  // fixed_array_map, sloppy_arguments_elements_map or
  // fixed_cow_array_map (for copy-on-write arrays). In the latter case
  // the elements array may be shared by a few objects and so before
  // writing to any element the array must be copied. Use
  // EnsureWritableFastElements in this case.
  //
  // In the slow mode the elements is either a NumberDictionary, an
  // ExternalArray, or a FixedArray parameter map for a (sloppy)
  // arguments object.

  inline bool HasFastProperties();

  // Returns true if an object has elements of FAST_SMI_ELEMENTS ElementsKind.
  inline bool HasFastSmiElements();
  // Returns true if an object has elements of FAST_ELEMENTS ElementsKind.
  inline bool HasFastObjectElements();
  // Returns true if an object has elements of FAST_ELEMENTS or
  // FAST_SMI_ONLY_ELEMENTS.
  inline bool HasFastSmiOrObjectElements();
  // Returns true if an object has any of the fast elements kinds.
  // Not exposed as %HasFastElements
  inline bool HasFastElements(); 
  // Returns true if an object has elements of FAST_DOUBLE_ELEMENTS
  // ElementsKind.
  inline bool HasFastDoubleElements();
  // Returns true if an object has elements of FAST_HOLEY_*_ELEMENTS
  // ElementsKind.
  inline bool HasFastHoleyElements();

  // Not exposed as %HasSloppyArgumentsElements
  inline bool HasSloppyArgumentsElements();
  // Not exposed as %HasDictionaryElements
  inline bool HasDictionaryElements();

  inline bool HasExternalArrayElements();

  // None of the below %HasExternal* are exposed
  inline bool HasExternalUint8ClampedElements();
  inline bool HasExternalInt8Elements();
  inline bool HasExternalUint8Elements();
  inline bool HasExternalInt16Elements();
  inline bool HasExternalUint16Elements();
  inline bool HasExternalInt32Elements();
  inline bool HasExternalUint32Elements();
  inline bool HasExternalFloat32Elements();
  inline bool HasExternalFloat64Elements();

  // None of the below %HasFixed* are exposed
  inline bool HasFixedTypedArrayElements();

  inline bool HasFixedUint8ClampedElements();
  inline bool HasFixedArrayElements();
  inline bool HasFixedInt8Elements();
  inline bool HasFixedUint8Elements();
  inline bool HasFixedInt16Elements();
  inline bool HasFixedUint16Elements();
  inline bool HasFixedInt32Elements();
  inline bool HasFixedUint32Elements();
  inline bool HasFixedFloat32Elements();
  inline bool HasFixedFloat64Elements();

  bool HasFastArgumentsElements();
  bool HasDictionaryArgumentsElements();

  // Returns true if this is an instance of an api function and has
  // been modified since it was created.  May give false positives.
  bool IsDirty();
  
  // Would we convert a fast elements array to dictionary mode given
  // an access at key?
  bool WouldConvertToSlowElements(Handle<Object> key);
  // Do we want to keep the elements in fast case when increasing the
  // capacity?
  bool ShouldConvertToSlowElements(int new_capacity);
  // Returns true if the backing storage for the slow-case elements of
  // this object takes up nearly as much space as a fast-case backing
  // storage would.  In that case the JSObject should have fast
  // elements.
  bool ShouldConvertToFastElements();
  // Returns true if the elements of JSObject contains only values that can be
  // represented in a FixedDoubleArray and has at least one value that can only
  // be represented as a double and not a Smi.
  bool ShouldConvertToFastDoubleElements(bool* has_smi_only_elements);


  // Lookup interceptors are used for handling properties controlled by host
  // objects.
  // The below two are not exposed
  inline bool HasNamedInterceptor();
  inline bool HasIndexedInterceptor();
