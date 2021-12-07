
import { $ } from './utils/dom.js';
import renderTemplate from './utils/renderTemplate.js';
import * as SELECTOR from '../js/constants/selector.js'

//components
import ResultModal from './components/ResultModal.js';


export default function App () {
    function render(){
        renderTemplate($(SELECTOR.APP),
            `<div class="d-flex justify-center mt-5">
                <div class="w-100">
                <h1 class="text-center" id='text'>🎱 행운의 로또</h1>
                <form class="mt-5" id='js-payment-form'>
                    <label class="mb-2 d-inline-block">구입할 금액을 입력해주세요.</label>
                    <div class="d-flex">
                    <input type="number" class="w-100 mr-2 pl-2" id='js-payment' placeholder="구입 금액"/>
                    <button type="button" id='js-purchase-button' class="btn btn-cyan">확인</button>
                    </div>
                </form>
                <section class="mt-9">
                    <div class="d-flex">
                    <label id='js-lotto-count' class="flex-auto my-0">총 0개를 구매하였습니다.</label>
                    <div class="flex-auto d-flex justify-end pr-1">
                        <label class="switch">
                        <input type="checkbox"  class="lotto-numbers-toggle-button"/>
                        <span class="text-base font-normal">번호보기</span>
                        </label>
                    </div>
                    </div>
                    <ul id='js-lotto-board' class="d-flex flex-wrap"></ul>
                </section>
                <form class="mt-9">
                    <label class="flex-auto d-inline-block mb-3">지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label>
                    <div class="d-flex">
                    <div>
                        <h4 class="mt-0 mb-3 text-center">당첨 번호</h4>
                        <div>
                        <input type="number" class="winning-number mx-1 text-center"/>
                        <input type="number" class="winning-number mx-1 text-center"/>
                        <input type="number" class="winning-number mx-1 text-center"/>
                        <input type="number" class="winning-number mx-1 text-center"/>
                        <input type="number" class="winning-number mx-1 text-center"/>
                        <input type="number" class="winning-number mx-1 text-center"/>
                        </div>
                    </div>
                    <div class="bonus-number-container flex-grow">
                        <h4 class="mt-0 mb-3 text-center">보너스 번호</h4>
                        <div class="d-flex justify-center">
                        <input type="number" class="bonus-number text-center" />
                        </div>
                    </div>
                    </div>
                    <button type="button" class="open-result-modal-button mt-5 btn btn-cyan w-100">결과 확인하기</button>
                </form>
                </div>
            </div>
            <div class="modal"></div>
        `)
    }
    render();

    function bindEvents(){
        $(SELECTOR.PAYMENT_FORM).addEventListener("submit", function (e) {e.preventDefault()});
        $(SELECTOR.CONFIRM_BTN).addEventListener("click", function (e) {console.log('hihi')});
        $(SELECTOR.LOTTO_NUMBER_SWITCH).addEventListener("click", function (e) {console.log('hihi')});
        $(SELECTOR.RESULT_BUTTON).addEventListener("click", () => {ResultModal($(SELECTOR.MODAL));onModalShow();});
    }
    bindEvents()

}


