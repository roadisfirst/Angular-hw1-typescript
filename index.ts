// 1. Add typings/access modifiers to the fruitBasket constant
enum Fruit {
  BANANA = 'banana',
  ORANGE = 'orange',
  KIWI = 'kiwi',
  APPLE = 'apple'
}

type FruitBasket = { [key in Fruit]: number };

const fruitBasket: FruitBasket = {
  [Fruit.BANANA]: 2,
  [Fruit.ORANGE]: 3,
  [Fruit.KIWI]: 2,
  [Fruit.APPLE]: 3
};

// 2. Add typings/access modifiers to the Person class
enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}
type GenderType = [Gender.MALE] | [Gender.FEMALE];

class Person {
  public constructor(
    public name: string,
    public gender: GenderType,
    public age: number,
    public likes: string[]
  ) {}

  public introduce(this: Person): string {
    const { name, gender, age, likes } = this;
    const goodLookingMap = new Map([
      [[Gender.MALE], 'handsome'],
      [[Gender.FEMALE], 'cute']
    ]);
    return `
      Hello, I'm ${name}, ${age} years old, I like: ${likes.join(', ')}. 
      As you can see, I'm quite ${goodLookingMap.get(gender)} too!
    `;
  }
}

const Dima = new Person('Dima', [Gender.MALE], 22, [
  'video games',
  'martial arts'
]);

// 3. Add typings/access modifiers to MovieService class

class MovieService {
  logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  public getMovies(): Promise<string[]> {
    return Promise.resolve(['Jaws', 'Spider-Man']).catch(err => {
      this.logger.log(err);
      return [];
    });
  }
}

interface Logger {
  log(err: Error): void;
}

class LoggerOne implements Logger {
  public log(err: Error): void {
    console.log('sending logs to log storage 1', err);
  }
}
class LoggerTwo implements Logger {
  public log(err: Error): void {
    console.log('sending logs to log storage 2', err);
  }
}

const movieService1 = new MovieService(new LoggerOne());
const movieService2 = new MovieService(new LoggerTwo());
