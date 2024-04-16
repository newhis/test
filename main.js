(()=>{

    //=========================================== 슬라이드 처리부분 시작 ================================================
    let roller = document.querySelector('.rolling-list');
    roller.id = 'roller1'; // 아이디 부여

    let clone = roller.cloneNode(true)
    // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
    clone.id = 'roller2';
    document.querySelector('.wrap').appendChild(clone); // wrap 하위 자식으로 부착

    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';
    // offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

    roller.classList.add('original');
    clone.classList.add('clone');
    // =========================================슬라이드 처리부분 끝====================================

    


    

    const setLayout = function()
    {
    

        if (window.innerHeight < 500)
        {
            sectionSet[0].height = 3000;
            sectionSet[1].height = 3000;
            sectionSet[2].height = 3000;
            sectionSet[3].height = 3000;
            sectionSet[3].height = 4000;
            sectionSet[0].objs.container.style.height = `${sectionSet[0].height}px`;
            sectionSet[1].objs.container.style.height = `${sectionSet[1].height}px`;
            sectionSet[2].objs.container.style.height = `${sectionSet[2].height}px`;
            sectionSet[3].objs.container.style.height = `${sectionSet[3].height}px`;
            sectionSet[4].objs.container.style.height = `${sectionSet[4].height}px`;
        }
        else
        {
            // section-0과 section-1의 높이를 설정한다.
            for (let i = 0; i < sectionSet.length; i++)
            {
                sectionSet[i].height = window.innerHeight * sectionSet[i].multiple;
                sectionSet[i].objs.container.style.height = `${sectionSet[i].height}px`;

            }

        }

        
    }

    const getCurrentSection = function()
    {   
        let total = 0;

        for(let i = 0; i < sectionSet.length; i++)
        {
            total = total + sectionSet[i].height;

            
            if(yOffset <= total)
            {
                return i;
            }
           
        }
    }

    const prevSectionHeight = function(currentSection){
        let prevSectionHeight = 0;

        for(let i = 0; i < currentSection; i++)
        {
            prevSectionHeight = prevSectionHeight + sectionSet[i].height;
        }

        return prevSectionHeight
    }


    const playAnimation = function(scrollRate){

        let section2_objs = sectionSet[2].objs;
        let section2_vals = sectionSet[2].vals;
        let section3_objs = sectionSet[3].objs;
        let section3_vals = sectionSet[3].vals;
        let section4_objs = sectionSet[4].objs;
        let section4_vals = sectionSet[4].vals;
        
       
        

        section2_objs.section2_imgA.style.opacity = 0;
        section2_objs.section2_imgB.style.opacity = 0;
        section2_objs.section2_imgC.style.opacity = 0;
        section2_objs.section2_imgD.style.opacity = 0;
        section2_objs.section2_imgE.style.opacity = 0;

        section3_objs.section3_msgA.style.opacity = 0;
        section3_objs.section3_msgB.style.opacity = 0;
        section3_objs.section3_msgC.style.opacity = 0;
        

        if((scrollRate > 0.13) && (scrollRate <= 0.178))
        {   
           
            cssValue = getCssValue(section2_vals.section_imgA_in);
            section2_objs.section2_imgA.style.opacity = cssValue;

        }
        else if((scrollRate > 0.178) && (scrollRate <= 0.228))
        {       
            
            section2_objs.section2_imgA.style.opacity = 1;
            cssValue = getCssValue(section2_vals.section_imgB_in);
            section2_objs.section2_imgB.style.opacity = cssValue;
            
        }
        else if((scrollRate > 0.228) && (scrollRate <= 0.3))
        {   
            
            section2_objs.section2_imgA.style.opacity = 1;
            section2_objs.section2_imgB.style.opacity = 1;
            cssValue = getCssValue(section2_vals.section_imgA_transX );
            section2_objs.section2_imgA.style.transform = `translateX(${cssValue}%)`;
            cssValue = getCssValue(section2_vals.section_imgB_transX );
            section2_objs.section2_imgB.style.transform = `translateX(${cssValue}%)`;
            
        }
        else if((scrollRate > 0.3) && (scrollRate <= 0.35))
        {   
            cssValue = getCssValue(section2_vals.section_imgC_in);
            section2_objs.section2_imgC.style.opacity = cssValue;
        }
        else if((scrollRate > 0.35) && (scrollRate <= 0.4))
        {   
            cssValue = getCssValue(section2_vals.section_imgC_out);
            section2_objs.section2_imgC.style.opacity = cssValue;
        }
        else if((scrollRate > 0.4) && (scrollRate <= 0.45))
        {   

            cssValue = getCssValue(section2_vals.section_imgD_in);
            section2_objs.section2_imgD.style.opacity = cssValue;
        }
        else if((scrollRate > 0.45) && (scrollRate <= 0.5))
        {   
            cssValue = getCssValue(section2_vals.section_imgD_out);
            section2_objs.section2_imgD.style.opacity = cssValue;
        }
        else if((scrollRate > 0.5) && (scrollRate <= 0.57))
        {   
            cssValue = getCssValue(section2_vals.section_imgE_in);
            section2_objs.section2_imgE.style.opacity = cssValue;
        }
        else if((scrollRate > 0.57) && (scrollRate <= 0.615))
        {   

            cssValue = getCssValue(section2_vals.section_imgE_out);
            section2_objs.section2_imgE.style.opacity = cssValue;
        }
        else if((scrollRate > 0.615) && (scrollRate < 0.63))
        {
            const section2_msg = document.querySelector('.section2-message');
            cssValue = getCssValue(section2_vals.section_msg_out);
            section2_msg.style.opacity = cssValue;
        }


        else if((scrollRate > 0.65) && (scrollRate <= 0.68))
        {
            cssValue = getCssValue(section3_vals.section3_Limg1_transX);
            section3_objs.section3_Limg1.style.transform = `translateX(${cssValue}%)`;
            cssValue = getCssValue(section3_vals.section3_Rimg1_transX);
            section3_objs.section3_Rimg1.style.transform = `translateX(${cssValue}%)`;
            
        }
        else if((scrollRate > 0.68) && (scrollRate <= 0.72))
        {
            cssValue = getCssValue(section3_vals.section3_Limg2_transX);
            section3_objs.section3_Limg2.style.transform = `translateX(${cssValue}%)`;
            cssValue = getCssValue(section3_vals.section3_Rimg2_transX);
            section3_objs.section3_Rimg2.style.transform = `translateX(${cssValue}%)`;
           
        }
        else if((scrollRate > 0.72) && (scrollRate <= 0.76))
        {
            cssValue = getCssValue(section3_vals.section3_Limg3_transX);
            section3_objs.section3_Limg3.style.transform = `translateX(${cssValue}%)`;
            cssValue = getCssValue(section3_vals.section3_Rimg3_transX);
            section3_objs.section3_Rimg3.style.transform = `translateX(${cssValue}%)`;
        }
        else if((scrollRate > 0.77) && (scrollRate <= 0.81))
        {
            cssValue = getCssValue(section3_vals.section3_imgA_in);
            section3_objs.section3_msgA.style.opacity = cssValue;
            
        }
        else if((scrollRate > 0.81) && (scrollRate <= 0.83))
        {
            cssValue = getCssValue(section3_vals.section3_imgA_out);
            section3_objs.section3_msgA.style.opacity = cssValue;
        }
        else if((scrollRate > 0.83) && (scrollRate <= 0.86))
        {
            cssValue = getCssValue(section3_vals.section3_imgB_in);
            section3_objs.section3_msgB.style.opacity = cssValue;
            
        }
        else if((scrollRate > 0.86) && (scrollRate <= 0.89))
        {
            cssValue = getCssValue(section3_vals.section3_imgB_out);
            section3_objs.section3_msgB.style.opacity = cssValue;
        }
        else if((scrollRate > 0.89) && (scrollRate <= 0.92))
        {
            cssValue = getCssValue(section3_vals.section3_imgC_in);
            section3_objs.section3_msgC.style.opacity = cssValue;
            
        }
        else if((scrollRate > 0.92) && (scrollRate <= 0.96))
        {
            cssValue = getCssValue(section3_vals.section3_imgC_out);
            section3_objs.section3_msgC.style.opacity = cssValue;
        }
        else if((scrollRate >0.97)  && (scrollRate <= 99))
        {
            cssValue = getCssValue(section4_vals.section4_img_in);
            section4_objs.section4_img.style.opacity = cssValue;
        }
        else
        {
            section2_objs.section2_imgA.style.opacity = 0;
            section2_objs.section2_imgB.style.opacity = 0;
            section2_objs.section2_imgC.style.opacity = 0;
            section2_objs.section2_imgD.style.opacity = 0;
            section2_objs.section2_imgE.style.opacity = 0;
      

            section3_objs.section3_msgA.style.opacity = 0;
            section3_objs.section3_msgB.style.opacity = 0;
            section3_objs.section3_msgC.style.opacity = 0;

            section4_objs.section4_img.style.opacity = 0;
         

            section3_objs.section3_Limg1.style.transform = `translateX(-70%)`;
            section3_objs.section3_Rimg1.style.transform = `translateX(70%)`;
            section3_objs.section3_Limg2.style.transform = `translateX(-70%)`;
            section3_objs.section3_Rimg2.style.transform = `translateX(70%)`;
            section3_objs.section3_Limg3.style.transform = `translateX(-70%)`;
            section3_objs.section3_Rimg3.style.transform = `translateX(70%)`;

        }

      


        if((scrollRate > 0.76))
        {
            section3_objs.section3_Limg1.style.transform = `translateX(40%)`;
            section3_objs.section3_Rimg1.style.transform = `translateX(-40%)`;
            section3_objs.section3_Limg2.style.transform = `translateX(40%)`;
            section3_objs.section3_Rimg2.style.transform = `translateX(-40%)`;
            section3_objs.section3_Limg3.style.transform = `translateX(40%)`;
            section3_objs.section3_Rimg3.style.transform = `translateX(-40%)`;
        }
        
        if(scrollRate < 0.615)
        {   
            const section2_msg = document.querySelector('.section2-message');
            section2_msg.style.opacity = 1;
        }
        else if(scrollRate >= 0.63)
        {   
            const section2_msg = document.querySelector('.section2-message');
            section2_msg.style.opacity = 0;
        }
        
        


        



    }

    const getCssValue = function(values){
        let partStart = (values[2].start * sectionSet[getCurrentSection()].height);
        let partEnd = (values[2].end * sectionSet[getCurrentSection()].height);
        let partLength = partEnd - partStart;
        let cssRange = values[1] - values[0];
        let partRate = (sectionYOffset - partStart)/partLength;

        if(sectionYOffset < partStart)
        {
            return values[0];
        }
        else if(sectionYOffset > partEnd)
        {
            return values[1];
        }
        else
        {
            return (cssRange * partRate) + values[0];
        }

    }



    
/////////////////////////실행부///////////////////////////////
    let yOffset = 0;
    let currentSection = 0;
    let scrollRate = 0;
    let scrollHeight = 0;
    let totalScrollHeight = 0;
    let sectionYOffset = 0;
    

    const sectionSet = [
        {   
            height : 0,
            multiple :1.2,
            objs : {
                container : document.querySelector('#section0'),
            },
            vlas : {
                
            },
        },

        {   
            height : 0,
            multiple :0.8,
            objs : {
                container : document.querySelector('#section1'),
                
            },
            vlas : {},
        },
        {   
            height : 0,
            multiple :8,
            objs : {
                container : document.querySelector('#section2'),
                section2_imgA : document.querySelector('.section2-image.a'),
                section2_imgOper : document.querySelector('.section2-operation'),
                section2_imgB : document.querySelector('.section2-image.b'),
                section2_imgC : document.querySelector('.section2-image.c'),
                section2_imgD : document.querySelector('.section2-image.d'),
                section2_imgE : document.querySelector('.section2-image.e'),
                 
            },
            vals : {

                section_imgA_in : [0,1,{start:0.05, end:0.15}],                
                section_imgB_in : [0,1,{start:0.15, end:0.25}],
                section_imgA_transX : [0,400,{start:0.25, end:0.35}],
                section_imgB_transX : [0,300,{start:0.25, end:0.35}],
                section_imgC_in : [0,1,{start:0.35, end:0.45}],
                section_imgC_out : [1,0,{start:0.45, end:0.55}],
                section_imgD_in : [0,1,{start:0.55, end:0.65}],
                section_imgD_out : [1,0,{start:0.65, end:0.75}],
                section_imgE_in : [0,1,{start:0.75, end:0.85}],
                section_imgE_out : [1,0,{start:0.85, end:0.95}],
                section_msg_out : [1,0,{start:0.95, end:0.97}],

                

            },
        },
        {   
            height : 0,
            multiple :5,
            objs : {
                container : document.querySelector('#section3'),
                section3_Limg1 : document.querySelector('.section3-images-links1'),
                section3_Rimg1 : document.querySelector('.section3-images-links2'),
                section3_Limg2 : document.querySelector('.section3-images-links3'),
                section3_Rimg2 : document.querySelector('.section3-images-links4'),
                section3_Limg3 : document.querySelector('.section3-images-links5'),
                section3_Rimg3 : document.querySelector('.section3-images-links6'),
                section3_msgA : document.querySelector('.section3-fix-a p'),
                section3_msgB : document.querySelector('.section3-fix-b p'),
                section3_msgC : document.querySelector('.section3-fix-c p'),

                
            },
            vals : {
                section3_Limg1_transX : [-70,40,{start:0, end:0.08}],
                section3_Rimg1_transX : [70,-40,{start:0, end:0.08}],
                section3_Limg2_transX : [-70,40,{start:0.11, end:0.2}],
                section3_Rimg2_transX : [70,-40,{start:0.11, end:0.2}],
                section3_Limg3_transX : [-70,40,{start:0.22, end:0.33}],
                section3_Rimg3_transX : [70,-40,{start:0.22, end:0.33}],
                section3_imgA_in : [0,1,{start:0.4, end:0.5}],
                section3_imgA_out : [1,0,{start:0.51, end:0.57}],
                section3_imgB_in : [0,1,{start:0.57, end:0.67}],
                section3_imgB_out : [1,0,{start:0.67, end:0.73}],
                section3_imgC_in : [0,1,{start:0.73, end:0.83}],
                section3_imgC_out : [1,0,{start:0.83, end:0.9}],

            },
        },
        {   
            height : 0,
            multiple :1,
            objs : {
                container : document.querySelector('#section4'),
                section4_img : document.querySelector('.section4-images')
                
            },
            vals : {
                section4_img_in : [0,1,{start:0.05, end:0.25}],
            },
        }
    ]
   

   

    window.addEventListener('load', ()=>{     
        // 높이등 레이아웃을 설정
        
        setLayout();
        currentSection = getCurrentSection();
       totalScrollHeight = document.body.clientHeight -  window.innerHeight;
      
    });

    window.addEventListener('scroll',()=>{
        setLayout();
        yOffset = window.scrollY;
        currentSection = getCurrentSection();
        sectionYOffset = yOffset - prevSectionHeight(currentSection);
        scrollRate = yOffset / totalScrollHeight;
        console.log(currentSection);
        console.log(scrollRate);
        console.log(section0_messageD);
        playAnimation(scrollRate);

    })

    const video = document.querySelector('.section0-video video');
    const global_nav = document.querySelector('.global-nav');
    let section0_messageD = document.querySelector('.section0-video .d');

    let msgDinterval;
    let videoInterval;
    let videoOpacity = 1;
    let msgDopacity = 0;

   
    



const changeVideoOpacity = function(){
    
    videoOpacity = videoOpacity - 0.1;
    if(videoOpacity >= 1)
    {
        videoOpacity = 1;
    }
    else if (videoOpacity < 0)
    {
        videoOpacity =0;
    }

    video.style.opacity = videoOpacity;
}

const changeVideoMsgD = function(){

    msgDopacity = msgDopacity + 0.1;

    if(msgDopacity >= 1)
    {
        msgDopacity = 1;
    }
    else if (msgDopacity < 0)
    {
        msgDopacity =0;
    }

    section0_messageD.style.opacity = msgDopacity;
    console.log(section0_messageD);
    
    }



setTimeout(()=>{
    video.style.width = '100%'; // 너비 확대
    video.style.height = '100%'; // 높이 확대

},800);


setTimeout(()=>{

    videoInterval = setInterval(changeVideoOpacity,150);
    global_nav.style.backgroundColor = 'white';
    
},7000)

setTimeout(()=>{
    msgDinterval = setInterval(changeVideoMsgD,100);
    
},7100)


setTimeout(()=>{
    clearInterval(videoInterval);
    clearInterval(msgDinterval);
},10000)

// 10초 후에 interval을 실행




})();