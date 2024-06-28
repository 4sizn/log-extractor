import "./style.css";

function saveToFile(element: HTMLButtonElement) {
  element.addEventListener("click", () => {
    const blob = new Blob(["Hello, world1!"], { type: "text/plain" });
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

saveToFile(document.querySelector<HTMLButtonElement>("#save")!);
