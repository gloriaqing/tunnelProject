import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
<<<<<<< .mine

||||||| .r4
import chart from '@/views/chart'
import view from '@/views/view'
import news from '@/views/news'
import chart1 from '@/views/chart1'
import chart2 from '@/views/chart2'
import view1 from '@/views/view1'
import news1 from '@/views/news1'
import news2 from '@/views/news2'

=======
>>>>>>> .r23

import action from '@/views/action.vue'
import nowVideo from '@/views/nowVideo.vue'
import managePeople from '@/views/managePeople.vue'
import nowDataGas from '@/views/nowDataGas.vue'


import tunnelGeneral from '@/views/tunnelGeneral.vue'
import real_timeData from '@/views/real_timeData.vue'
import personInfo from '@/views/personInfo.vue'
import attenceInfo from '@/views/attenceInfo.vue'
import loading from '@/views/loading.vue'
//import personLocation from '@/views/personLocation.vue'
import login from '@/components/login.vue'

import managePeople from '@/views/managePeople.vue'
import nowDataGas from '@/views/nowDataGas.vue'
import gas from '@/views/gas.vue'
Vue.use(Router)

export default new Router({
	mode:'history',
	 routes: [
		{
        path: '/view',
        component: home,
<<<<<<< .mine
        children: [                        
           
            { path: '/managePeople', component: managePeople, name: '人员管理' },
             { path: '/nowDataGas', component: nowDataGas, name: '环境监测' },
            { path: '/gas', component: gas, name: '环境监测' },
            //update by qxx
            
||||||| .r4
        children: [                        
            { path: '/chart', component: chart, name: '首页' },
            { path: '/news', component: news, name: '考勤管理' },
            { path: '/view', component: view, name: '整体看板' },
            { path: '/chart1', component: chart1, name: '' },
            { path: '/news1', component: news1, name: '考勤管理' },
            { path: '/view1', component: view1, name: '员工管理' },
            { path: '/news2', component: news2, name: '敏感区域设置' },
            { path: '/chart2', component: chart2, name: '员工管理' },
            
            
            //update by qxx
            
=======
        children: [                                                         
            //update by qxx            
>>>>>>> .r23
            { path: '/action', component: action, name: '' },
            { path: '/nowVideo', component: nowVideo, name: '' },
            { path: '/managePeople', component: managePeople, name: '' },
            { path: '/nowDataGas', component: nowDataGas, name: '' },           
            //update by ww           
            { path: '/tunnelGeneral', component: tunnelGeneral, name: '' },
            { path: '/real_timeData', component: real_timeData, name: '' },
            { path: '/personInfo', component: personInfo, name: '' },
            { path: '/attenceInfo', component: attenceInfo, name: '' },
            { path: '/loading', component: loading, name: '' },
//          { path: '/personLocation', component: personLocation, name: '' }
        ]    
    },
            { path: '/', component: login, name: '' }
		]
})
