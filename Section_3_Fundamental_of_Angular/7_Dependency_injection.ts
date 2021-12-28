/*
Back to hello-world\src\app\courses.component.ts

So dependency injection means injecting or providing the dependencies of a class into its constructor.

So a quick round up back in our component, we added 'CoursesServices' as a parameter in the constructor
or in other words, as a dependency of this class and then registered this in the module, inside the providers array.

As a provider and an app module with this implementation. When Angular is going to create an instance of this component first, 
it will instantiate its dependencies and then it will inject those dependencies into the constructor of this class.
And this is what we call dependency injection.
*/
