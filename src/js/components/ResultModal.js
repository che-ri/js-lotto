import renderTemplate from "../utils/renderTemplate.js";
import * as SELECTOR from '../../js/constants/selector.js'
import { $ } from "../utils/dom.js";

export default function ResultModal($target){
    function render(){
        renderTemplate($target,     
            `<div class="modal-inner p-10">
                <div class="modal-close">
                    <svg viewbox="0 0 40 40">
                        <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
                    </svg>
                </div>
                <h2 class="text-center">🏆 당첨 통계 🏆</h2>
                <div class="d-flex justify-center">
                    <table class="result-table border-collapse border border-black">
                        <thead>
                            <tr class="text-center">
                                <th class="p-3">일치 갯수</th>
                                <th class="p-3">당첨금</th>
                                <th class="p-3">당첨 갯수</th>
                            </tr>
                        </thead>
                        <tbody id=js-result-board></tbody>
                    </table>
                </div>
                <p class="text-center font-bold" id='js-profit-rate'>당신의 총 수익률은 %입니다.</p>
                <div class="d-flex justify-center mt-5">
                    <button type="button" class="btn btn-cyan" id='js-reset-btn'>다시 시작하기</button>
                </div>
                </div>
            </div>
            `)
    }


    function bindEvents(){
        $(SELECTOR.MODAL_CLOSE).addEventListener("click", onModalClose);
        $(SELECTOR.RESET_BUTTON).addEventListener("click",reset);
    }
    
    function onModalShow () {
        $target.classList.add("open");
    };

    function onModalClose  ()  {
        $target.classList.remove("open");
    };

    function reset(){
        console.log('리셋')
    }
    
    render();
    bindEvents()
    onModalShow()
}