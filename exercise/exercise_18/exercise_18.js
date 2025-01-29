/*
Exercise 18: Advanced Conditional Rendering with Objects

Problem:

Implement a function `renderComponent` that takes a component 
name ('Header', 'Footer', 'Sidebar', 'Content') and returns the 
corresponding component function from an object mapping. 

The component functions should return some simple html code in a string
depending on the type of component selected:
	- Header -> uses <header> tag in the string
	- Footer -> uses <footer> tag in the string
	- Sidebar -> uses <aside> tag in the string
	- Content -> uses <main> tag in the string


Use conditional logic to handle cases where the component does not exist, 
returning a default component.

	- Default component -> uses <div> tag in the string */