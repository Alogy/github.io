

'use strict';


$('#fullpage').fullpage({
	
//	sectionsColor: ['#91a8d0','#04f0f0','#91a8d0','#04f0f0','#91a8d0'],
	sectionsColor: ['#91a8d0','#8ca0c8','#91a8d0','#8ca0c8','#91a8d0'],
	
	anchors: ['firstPage','secondPage','thirdPage','fourthPage','fivePage'],
	
	navigation: true,
	
	navigationTooltips: ['首页','项目经验','擅长技术','工作经验','了解更多'],
	
	//进入
	afterLoad: ( anchorlink,idx ) => {
		
	},
	
	//离开
	onLeave: ( idx,nextIndex,direction ) => {
		
	},
	
	//载入完毕
	afterRender: () => {
		
	}
		
});
			
