#include <node.h>
#include <nan.h>
#include <v8.h>

using v8::FunctionTemplate;
using v8::Handle;
using v8::Object;
using v8::String;
using v8::Uint32;

using namespace v8::internal;

NAN_METHOD(RF_AllowNatives) {
  NanScope();

  v8::V8::SetFlagsFromString("--allow-natives-syntax", (int)strlen("--allow-natives-syntax"));

  NanReturnUndefined();
}

void init(Handle<v8::Object> exports) {
  exports->Set(NanNew<v8::String>("allowNatives"), NanNew<v8::FunctionTemplate>(RF_AllowNatives)->GetFunction());
}

NODE_MODULE(runtime_functions, init)
