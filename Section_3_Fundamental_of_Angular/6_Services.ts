/* 
Back to hello-world\src\app\courses.service.ts

In a real world application, most of the time, we get these courses from the server, 
so instead of hard coding them here, we need to call an http endpoint to get the list of courses.

Now here we have two options, one is to add the logic or calling an HTTP service,
here in this Component. But there are a couple problems with this approach.
The first problem is that this logic is going to tightly couple this Component to that http endpoint.
Now in the future, when you want to write unit tests for this class, we don't want to be dependent upon a live http endpoint.
Because this is going to make it harder to execute those unit tests. So we want to create a fake implementation
of an HTTP service. But this is the first issue with writing this logic inside this class, inside this Component, it's going to tightly
couple this Component to that HTTP endpoint. The second issue, is that maybe somewhere else in the application we're going to have another page
wherever we display the list of courses, maybe it's part of a dashboard, maybe somewhere for the admin. With this implementation
we have to repeat this logic, the logic for consuming that HTTP service in multiple places, and that's not good. And finally
the third issue with this implementation is that Component should not include any logic other than the presentation logic.

Whereas the logic behind this view, what should happen when we click a button, when we set an item from a drop down list, and so on.
Details of how courses are retrieved should be delegated somewhere else in our application. So where should we implement that logic? 
In Angular we use services for that. So we're going to define a separate class which we call a service, and there we'll add this logic
for getting the list of courses from an HTTP service, then we can reuse this class in multiple places, so let me show you how to do that.

*/