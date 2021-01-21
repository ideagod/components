class DomOperation {
    constructor(data) {
        this.baseData(data);
        this.htmlConstructor();
        this.eventListener();
    }    

    baseData(data) {
        this.Area=data.area;
        this.oConLeft = document.querySelector(".con-left");
        this.oConRight = document.querySelector(".con-right");
        this.oSelectAddr = document.querySelector(".select-addr");
        this.showAreaList = this.oConLeft.querySelector("ul");
    }

    htmlConstructor() {
        this.Area.forEach((item) => {
            this.showArea = document.createElement("li");
            this.showArea.classList.add("local-list");
            this.showAreaA = document.createElement("a");
            this.showAreaA.setAttribute("herf", "javascript:;");
            this.showAreaA.innerText =item;
            this.showArea.appendChild(this.showAreaA);
            this.showAreaList.appendChild(this.showArea);
        })
        this.oConLeft.querySelectorAll("LI").forEach((item) => {
            item.dataset.toggle = false;
        })

    }

    eventListener() {
        document.addEventListener("click", (ev = window.event) => {
            this.ele = ev.target.parentNode;
            switch (this.ele.tagName) {
                case "LI":
                    if (this.ele.dataset.toggle === "false") {
                        this.str = this.ele.innerText + " ";

                        //添加左边元素
                        this.oLeftChild = document.createElement("span");
                        this.oLeftChild.classList.add("selected-list");
                        this.oLeftChild.append(this.str);

                        //添加右边元素
                        this.oRigthChild = this.oConRight.appendChild(this.oLeftChild.cloneNode(true));

                        //添加左边元素a标签
                        this.oLeftChildA = document.createElement("a");
                        this.oLeftChildA.setAttribute("herf", "javascript:;")
                        this.oLeftChildA.innerText = "x";
                        this.oLeftChild.appendChild(this.oLeftChildA);
                        this.oSelectAddr.appendChild(this.oLeftChild);

                        this.ele.dataset.toggle = true;
                        deathTogether(this.oLeftChild, this.oRigthChild, this.ele)
                    }
                    break;
                case "SPAN":
                    this.ele.remove();
                    break;
            }
        })
        function deathTogether(ele1, ele2, eleF) {
            ele1.addEventListener("DOMNodeRemoved", () => {
                ele2.remove();
                eleF.dataset.toggle = false;
            })
        }
    }

}