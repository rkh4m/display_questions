import './App.css';
import DisplayQuestions from './displayQuestion';

function App() {
  return (
    <div className="App"> Display Questions
      <div className='box' id='1' />
      <div className='box' id='2' />
      <div className='box' id='3' />
      {DisplayData()}
    </div>
  );
}

function DisplayData() {
  const numArray = Array.from({ length: 100 }, (_, index) => index + 1);
  var displayedQs = new Queue(3);
  const delay = 1000;

  for (let ind = 0; ind < numArray.length; ind++) {
    setTimeout(() => {
      if (displayedQs.size() === 3) {
        displayedQs.dequeue();
      };
      var boxId = 3;
      for (const item of displayedQs.items) {
        DisplayQuestions(item, boxId.toString());
        boxId--;
      }
      DisplayQuestions(numArray[ind], '1');
      displayedQs.enqueue(numArray[ind]);
    }, delay * (ind/3+1));
  }
}

export default App;

class Queue {
  constructor(maxSize) {
    this.items = [];
    this.maxSize = maxSize;
  }

  // Enqueue: Add an element to the end of the queue
  enqueue(element) {
    if (this.size() < this.maxSize) {
      this.items.push(element);
    } else {
      console.log("Queue is at maximum size. Cannot enqueue more elements.");
    }
  }

  // Dequeue: Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Peek: Return the front element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }
}