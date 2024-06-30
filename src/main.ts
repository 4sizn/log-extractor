import "./style.css";
import { consoleHistory } from "log-collect-fe";

// @ts-ignore
window.consoleHistory = consoleHistory;
function saveToFile(element: HTMLButtonElement, data: typeof consoleHistory) {
  element.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(data)], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "hello.txt";
    a.click();
    URL.revokeObjectURL(url);
  });
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="card">
    <button id="save" type="button">Save</button>
    </div>
  </div>
`;

saveToFile(document.querySelector<HTMLButtonElement>("#save")!, consoleHistory);
