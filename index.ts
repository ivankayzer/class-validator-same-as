export default function sameAs(registerDecorator: Function) {
  return function(property: string, validationOptions?: any) {
    return function(object: Record<string, any>, propertyName: string) {
      registerDecorator({
        name: "isSameAs",
        target: object.constructor,
        propertyName: propertyName,
        constraints: [property],
        options: validationOptions,
        validator: {
          validate(value: any, args: any) {
            const [relatedPropertyName] = args.constraints;
            return args.object[relatedPropertyName] === value;
          },
          defaultMessage() {
            return "$constraint1 must match $property";
          }
        }
      });
    };
  };
}
