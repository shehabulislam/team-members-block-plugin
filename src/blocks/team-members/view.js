import { createRoot } from 'react-dom';

document.addEventListener("DOMContentLoaded", function () {
  // Any frontend JavaScript can go here
  console.log("Team Members Block loaded");

  const blocks = document.querySelectorAll('tmbp-blocks');

  blocks.forEach(item => {

    const root = createRoot(item);
    root.render(<View />)
  })
});



export function View() {
  

  return <>
  <h3>View Team members</h3>
  </>
}