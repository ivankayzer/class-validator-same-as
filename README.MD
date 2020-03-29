# class-validator-same-as

This is a simple custom validation rule for comparing two attributes for [custom-validator](https://github.com/typestack/class-validator).

## Install

```bash
npm install class-validator-same-as --save
```

## Usage

```typescript
import { IsEmail, IsNotEmpty, registerDecorator } from 'class-validator';
import sameAs from 'class-validator-same-as';

const IsSameAs = sameAs(registerDecorator);

export class RegisterUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsSameAs('password')
  password_confirmation: string;
}
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)