
//template = `<div>template</div>`
//$target = template를 심어줄 element

export default function renderTemplate( $target, template ) {
  const $temp = document.createElement("template");
  $temp.insertAdjacentHTML("beforeend", template);
  $target.replaceChildren(...$temp.children);
}
