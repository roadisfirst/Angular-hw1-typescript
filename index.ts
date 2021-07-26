// 1. Add typings/access modifiers to the fruitBasket constant
enum Fruit {
  BANANA = 'banana',
  ORANGE = 'orange',
  KIWI = 'kiwi',
  APPLE = 'apple'
}

type fruitBasket = { [key in Fruit]: number };

const fruitBasket: fruitBasket = {
  banana: 2,
  orange: 3,
  kiwi: 2,
  apple: 3
};

// 2. Add typings/access modifiers to the Person class
class Person {
  name: string;
  gender: string;
  age: number;
  likes: string[];
  public constructor(
    name: string,
    gender: string,
    age: number,
    likes: string[]
  ) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.likes = likes;
  }

  public introduce(this: Person): string {
    const { name, gender, age, likes } = this;
    const goodLookingMap = new Map([['male', 'handsome'], ['female', 'cute']]);
    return `
      Hello, I'm ${name}, ${age} years old, I like: ${likes.join(', ')}. 
      As you can see, I'm quite ${goodLookingMap.get(gender)} too!
    `;
  }
}

const Dima = new Person('Dima', 'male', 22, ['video games', 'martial arts']);

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

abstract class Logger {
  abstract log(err: Error): void;
}

class LoggerOne extends Logger {
  public log(err: Error): void {
    console.log('sending logs to log storage 1', err);
  }
}
class LoggerTwo extends Logger {
  public log(err: Error): void {
    console.log('sending logs to log storage 2', err);
  }
}

const movieService1 = new MovieService(new LoggerOne());
const movieService2 = new MovieService(new LoggerTwo());
