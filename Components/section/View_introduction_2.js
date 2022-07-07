import { SVC_PATH } from "@/lib/constants"
import Image from "next/image";

export default function View_introduction_2() {

    const arrow_down_img = SVC_PATH + '/image/arrow_down.png';

    const imgwidth = 72;
    const imgheight = 36;

    return (
        <div className="introduction_2">
            <h4>기획</h4>
            <div className="desc">
                매주 월요일 편집장 이하 기자들과 디자이너 등이 모여 기획회의를 진행합니다.
                기자들은 매주 회의를 위해 아이템을 준비하고 발표합니다.
                선정된 아이템을 바탕으로 지면을 기획하고 해당 기자는 취재 등을 준비합니다.
            </div>
            <div className="arrow">
                <Image src={arrow_down_img} width={ imgwidth } height={ imgheight } />
            </div>
            <h4>취재 및 기사 작성</h4>
            <div className="desc">
                기획회의 이후 기사 작성을 위해 취재원을 섭외하고 관련 자료를 추가 수집합니다.
                관계자 인터뷰 및 현장 취재, 자료 수집 등으로 기사를 작성합니다.
                더 나은 기사를 위해 원고 마감 때까지 이 과정은 반복됩니다.
            </div>
            <div className="arrow">
                <Image src={arrow_down_img} width={ imgwidth } height={ imgheight } />
            </div>
            <h4>원고 마감</h4>
            <div className="desc">
                매주 목요일 기자들이 작성한 기사를 편집장과 편집팀이 검토합니다.
                보강이 필요하다고 판단되는 경우 해당 기자는 다시 자료 수집 및 취재, 기사작성을 합니다.
            </div>
            <div className="arrow">
                <Image src={arrow_down_img} width={ imgwidth } height={ imgheight } />
            </div>
            <h4>교열 및 디자인</h4>
            <div className="desc">
                원고 마감된 기사를 교열기자들이 정확한 단어와 문장으로 재탄생 시킵니다.
                디자이너는 기사가 잘 읽히도록 기사와 사진, 인포그래픽 등을 배치합니다.
                디자인된 지면을 해당 기자와 편집팀, 편집장이 최종 검수합니다.
            </div>
            <div className="arrow">
                <Image src={arrow_down_img} width={ imgwidth } height={ imgheight } />
            </div>
            <h4>인쇄 및 제작</h4>
            <div className="desc">
                디자인된 지면으로 인쇄판을 만들고 색을 맞춘 후 인쇄를 시작합니다.
                인쇄된 지면은 판형에 맡게 잘라내고 낱장으로 된 종이를 모아 제본을 하게 됩니다.
            </div>
            <div className="arrow">
                <Image src={arrow_down_img} width={ imgwidth } height={ imgheight } />
            </div>
            <h4>배송</h4>
            <div className="desc">
                정기구독자 배송을 위해 봉투에 주소 라벨을 붙이고 잡지를 포장합니다.
                포장된 잡지는 우편집중국에 접수해 독자님에게 발송합니다.
            </div>
        </div>
    )
}