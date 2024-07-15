"use strict";(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[878],{8448:(t,e,i)=>{function s({top:t,left:e,right:i,bottom:s}){return{x:{min:e,max:i},y:{min:t,max:s}}}function o({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function a(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),s=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:s.y,right:s.x}}i.d(e,{FY:()=>s,bS:()=>a,pA:()=>o})},5673:(t,e,i)=>{i.d(e,{OU:()=>h,Ql:()=>u,Ww:()=>y,hq:()=>a,o4:()=>l});var s=i(9713),o=i(1630);function a(t,e,i){return i+e*(t-i)}function n(t,e,i,s,o){return void 0!==o&&(t=a(t,o,s)),a(t,i,s)+e}function r(t,e=0,i=1,s,o){t.min=n(t.min,e,i,s,o),t.max=n(t.max,e,i,s,o)}function l(t,{x:e,y:i}){r(t.x,e.translate,e.scale,e.originPoint),r(t.y,i.translate,i.scale,i.originPoint)}function h(t,e,i,s=!1){const a=i.length;if(!a)return;let n,r;e.x=e.y=1;for(let h=0;h<a;h++){n=i[h],r=n.projectionDelta;const a=n.instance;a&&a.style&&"contents"===a.style.display||(s&&n.options.layoutScroll&&n.scroll&&n!==n.root&&y(t,{x:-n.scroll.offset.x,y:-n.scroll.offset.y}),r&&(e.x*=r.x.scale,e.y*=r.y.scale,l(t,r)),s&&(0,o.HD)(n.latestValues)&&y(t,n.latestValues))}e.x=c(e.x),e.y=c(e.y)}function c(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function u(t,e){t.min=t.min+e,t.max=t.max+e}function d(t,e,[i,o,a]){const n=void 0!==e[a]?e[a]:.5,l=(0,s.k)(t.min,t.max,n);r(t,e[i],e[o],l,e.scale)}const m=["x","scaleX","originX"],p=["y","scaleY","originY"];function y(t,e){d(t.x,e,m),d(t.y,e,p)}},5120:(t,e,i)=>{i.d(e,{CQ:()=>o,HQ:()=>a,N:()=>h,jA:()=>u,vb:()=>r});var s=i(9713);function o(t){return t.max-t.min}function a(t,e=0,i=.01){return Math.abs(t-e)<=i}function n(t,e,i,n=.5){t.origin=n,t.originPoint=(0,s.k)(e.min,e.max,t.origin),t.scale=o(i)/o(e),(a(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=(0,s.k)(i.min,i.max,t.origin)-t.originPoint,(a(t.translate)||isNaN(t.translate))&&(t.translate=0)}function r(t,e,i,s){n(t.x,e.x,i.x,s?s.originX:void 0),n(t.y,e.y,i.y,s?s.originY:void 0)}function l(t,e,i){t.min=i.min+e.min,t.max=t.min+o(e)}function h(t,e,i){l(t.x,e.x,i.x),l(t.y,e.y,i.y)}function c(t,e,i){t.min=e.min-i.min,t.max=t.min+o(e)}function u(t,e,i){c(t.x,e.x,i.x),c(t.y,e.y,i.y)}},4106:(t,e,i)=>{i.d(e,{ge:()=>o,xU:()=>s});const s=()=>({x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}),o=()=>({x:{min:0,max:0},y:{min:0,max:0}})},2725:(t,e,i)=>{i.d(e,{P:()=>At});var s=i(2606),o=i(4868),a=i(7170),n=i(9713),r=i(3659),l=i(5269);const h=["TopLeft","TopRight","BottomLeft","BottomRight"],c=h.length,u=t=>"string"==typeof t?parseFloat(t):t,d=t=>"number"==typeof t||l.px.test(t);function m(t,e){return void 0!==t[e]?t[e]:t.borderRadius}const p=g(0,.5,o.yT),y=g(.5,.95,r.l);function g(t,e,i){return s=>s<t?0:s>e?1:i((0,a.q)(t,e,s))}function f(t,e){t.min=e.min,t.max=e.max}function v(t,e){f(t.x,e.x),f(t.y,e.y)}var x=i(5673),T=i(5120);function P(t,e,i,s,o){return t-=e,t=(0,x.hq)(t,1/i,s),void 0!==o&&(t=(0,x.hq)(t,1/o,s)),t}function D(t,e,[i,s,o],a,r){!function(t,e=0,i=1,s=.5,o,a=t,r=t){if(l.KN.test(e)&&(e=parseFloat(e),e=(0,n.k)(r.min,r.max,e/100)-r.min),"number"!=typeof e)return;let h=(0,n.k)(a.min,a.max,s);t===a&&(h-=e),t.min=P(t.min,e,i,h,o),t.max=P(t.max,e,i,h,o)}(t,e[i],e[s],e[o],e.scale,a,r)}const S=["x","scaleX","originX"],j=["y","scaleY","originY"];function R(t,e,i,s){D(t.x,e,S,i?i.x:void 0,s?s.x:void 0),D(t.y,e,j,i?i.y:void 0,s?s.y:void 0)}var k=i(4106),A=i(2010);function B(t){return 0===t.translate&&1===t.scale}function L(t){return B(t.x)&&B(t.y)}function V(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function w(t){return(0,T.CQ)(t.x)/(0,T.CQ)(t.y)}var C=i(2358);class U{constructor(){this.members=[]}add(t){(0,C.Kq)(this.members,t),t.scheduleRender()}remove(t){if((0,C.Ai)(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(t){const e=this.members.findIndex((e=>t===e));if(0===e)return!1;let i;for(let t=e;t>=0;t--){const e=this.members[t];if(!1!==e.isPresent){i=e;break}}return!!i&&(this.promote(i),!0)}promote(t,e){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,e&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;!1===s&&i.hide()}}exitAnimationComplete(){this.members.forEach((t=>{const{options:e,resumingFrom:i}=t;e.onExitComplete&&e.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()}))}scheduleRender(){this.members.forEach((t=>{t.instance&&t.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}var E=i(8645);function b(t,e,i){let s="";const o=t.x.translate/e.x,a=t.y.translate/e.y,n=(null==i?void 0:i.z)||0;if((o||a||n)&&(s=`translate3d(${o}px, ${a}px, ${n}px) `),1===e.x&&1===e.y||(s+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:t,rotate:e,rotateX:o,rotateY:a,skewX:n,skewY:r}=i;t&&(s=`perspective(${t}px) ${s}`),e&&(s+=`rotate(${e}deg) `),o&&(s+=`rotateX(${o}deg) `),a&&(s+=`rotateY(${a}deg) `),n&&(s+=`skewX(${n}deg) `),r&&(s+=`skewY(${r}deg) `)}const r=t.x.scale*e.x,l=t.y.scale*e.y;return 1===r&&1===l||(s+=`scale(${r}, ${l})`),s||"none"}var F=i(2957),O=i(1630),M=i(7165),I=i(4322),N=i(775),$=i(6528),H=i(6610),z=i(1247),Q=i(6331),X=i(2464),Y=i(104),W=i(4582),G=i(9268),q=i(4458);const _=["","X","Y","Z"],K={visibility:"hidden"};let Z=0;const J={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function tt(t,e,i,s){const{latestValues:o}=e;o[t]&&(i[t]=o[t],e.setStaticValue(t,0),s&&(s[t]=0))}function et(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return!1;const{visualElement:e}=t.options;return!!e&&(!!(0,q.P)(e)||!(!t.parent||t.parent.hasCheckedOptimisedAppear)&&et(t.parent))}function it({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:o,resetTransform:a}){return class{constructor(t={},i=(null==e?void 0:e())){this.id=Z++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,J.totalNodes=J.resolvedTargetDeltas=J.recalculatedProjection=0,this.nodes.forEach(at),this.nodes.forEach(dt),this.nodes.forEach(mt),this.nodes.forEach(nt),(0,H.g)(J)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=t,this.root=i?i.root||i:this,this.path=i?[...i.path,i]:[],this.parent=i,this.depth=i?i.depth+1:0;for(let t=0;t<this.path.length;t++)this.path[t].shouldResetTransform=!0;this.root===this&&(this.nodes=new M.Y)}addEventListener(t,e){return this.eventHandlers.has(t)||this.eventHandlers.set(t,new s.v),this.eventHandlers.get(t).add(e)}notifyListeners(t,...e){const i=this.eventHandlers.get(t);i&&i.notify(...e)}hasListeners(t){return this.eventHandlers.has(t)}mount(e,i=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=(0,z.x)(e),this.instance=e;const{layoutId:s,layout:o,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),i&&(o||s)&&(this.isLayoutDirty=!0),t){let i;const s=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,i&&i(),i=(0,$.c)(s,250),N.w.hasAnimatedSinceResize&&(N.w.hasAnimatedSinceResize=!1,this.nodes.forEach(ut))}))}s&&this.root.registerSharedNode(s,this),!1!==this.options.animate&&a&&(s||o)&&this.addEventListener("didUpdate",(({delta:t,hasLayoutChanged:e,hasRelativeTargetChanged:i,layout:s})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const o=this.options.transition||a.getDefaultTransition()||xt,{onLayoutAnimationStart:n,onLayoutAnimationComplete:r}=a.getProps(),l=!this.targetLayout||!V(this.targetLayout,s)||i,h=!e&&i;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||h||e&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,h);const e={...(0,A.r)(o,"layout"),onPlay:n,onComplete:r};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else e||ut(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=s}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const t=this.getStack();t&&t.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,(0,Y.WG)(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(pt),this.animationId++)}getTransformTemplate(){const{visualElement:t}=this.options;return t&&t.getProps().transformTemplate}willUpdate(t=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.HandoffCancelAllAnimations&&et(this)&&window.HandoffCancelAllAnimations(),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let t=0;t<this.path.length;t++){const e=this.path[t];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:e,layout:i}=this.options;if(void 0===e&&!i)return;const s=this.getTransformTemplate();this.prevTransformTemplateValue=s?s(this.latestValues,""):void 0,this.updateSnapshot(),t&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(lt);this.isUpdating||this.nodes.forEach(ht),this.isUpdating=!1,this.nodes.forEach(ct),this.nodes.forEach(st),this.nodes.forEach(ot),this.clearAllSnapshots();const t=W.k.now();Y.uv.delta=(0,X.q)(0,1e3/60,t-Y.uv.timestamp),Y.uv.timestamp=t,Y.uv.isProcessing=!0,Y.Ci.update.process(Y.uv),Y.Ci.preRender.process(Y.uv),Y.Ci.render.process(Y.uv),Y.uv.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,G.k.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(rt),this.sharedNodes.forEach(yt)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Y.Gt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Y.Gt.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let t=0;t<this.path.length;t++)this.path[t].updateScroll();const t=this.layout;this.layout=this.measure(!1),this.layoutCorrected=(0,k.ge)(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:e}=this.options;e&&e.notify("LayoutMeasure",this.layout.layoutBox,t?t.layoutBox:void 0)}updateScroll(t="measure"){let e=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===t&&(e=!1),e&&(this.scroll={animationId:this.root.animationId,phase:t,isRoot:o(this.instance),offset:i(this.instance)})}resetTransform(){if(!a)return;const t=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,e=this.projectionDelta&&!L(this.projectionDelta),i=this.getTransformTemplate(),s=i?i(this.latestValues,""):void 0,o=s!==this.prevTransformTemplateValue;t&&(e||(0,O.HD)(this.latestValues)||o)&&(a(this.instance,s),this.shouldResetTransform=!1,this.scheduleRender())}measure(t=!0){const e=this.measurePageBox();let i=this.removeElementScroll(e);var s;return t&&(i=this.removeTransform(i)),Dt((s=i).x),Dt(s.y),{animationId:this.root.animationId,measuredBox:e,layoutBox:i,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:t}=this.options;if(!t)return(0,k.ge)();const e=t.measureViewportBox(),{scroll:i}=this.root;return i&&((0,x.Ql)(e.x,i.offset.x),(0,x.Ql)(e.y,i.offset.y)),e}removeElementScroll(t){const e=(0,k.ge)();v(e,t);for(let i=0;i<this.path.length;i++){const s=this.path[i],{scroll:o,options:a}=s;if(s!==this.root&&o&&a.layoutScroll){if(o.isRoot){v(e,t);const{scroll:i}=this.root;i&&((0,x.Ql)(e.x,-i.offset.x),(0,x.Ql)(e.y,-i.offset.y))}(0,x.Ql)(e.x,o.offset.x),(0,x.Ql)(e.y,o.offset.y)}}return e}applyTransform(t,e=!1){const i=(0,k.ge)();v(i,t);for(let t=0;t<this.path.length;t++){const s=this.path[t];!e&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(0,x.Ww)(i,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),(0,O.HD)(s.latestValues)&&(0,x.Ww)(i,s.latestValues)}return(0,O.HD)(this.latestValues)&&(0,x.Ww)(i,this.latestValues),i}removeTransform(t){const e=(0,k.ge)();v(e,t);for(let t=0;t<this.path.length;t++){const i=this.path[t];if(!i.instance)continue;if(!(0,O.HD)(i.latestValues))continue;(0,O.vk)(i.latestValues)&&i.updateSnapshot();const s=(0,k.ge)();v(s,i.measurePageBox()),R(e,i.latestValues,i.snapshot?i.snapshot.layoutBox:void 0,s)}return(0,O.HD)(this.latestValues)&&R(e,this.latestValues),e}setTargetDelta(t){this.targetDelta=t,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(t){this.options={...this.options,...t,crossfade:void 0===t.crossfade||t.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Y.uv.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(t=!1){var e;const i=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=i.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=i.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=i.isSharedProjectionDirty);const s=Boolean(this.resumingFrom)||this!==i;if(!(t||s&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:o,layoutId:a}=this.options;if(this.layout&&(o||a)){if(this.resolvedRelativeTargetAt=Y.uv.timestamp,!this.targetDelta&&!this.relativeTarget){const t=this.getClosestProjectingParent();t&&t.layout&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget=(0,k.ge)(),this.relativeTargetOrigin=(0,k.ge)(),(0,T.jA)(this.relativeTargetOrigin,this.layout.layoutBox,t.layout.layoutBox),v(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){if(this.target||(this.target=(0,k.ge)(),this.targetWithTransforms=(0,k.ge)()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),(0,T.N)(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):v(this.target,this.layout.layoutBox),(0,x.o4)(this.target,this.targetDelta)):v(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const t=this.getClosestProjectingParent();t&&Boolean(t.resumingFrom)===Boolean(this.resumingFrom)&&!t.options.layoutScroll&&t.target&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget=(0,k.ge)(),this.relativeTargetOrigin=(0,k.ge)(),(0,T.jA)(this.relativeTargetOrigin,this.target,t.target),v(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}J.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!(0,O.vk)(this.parent.latestValues)&&!(0,O.vF)(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var t;const e=this.getLead(),i=Boolean(this.resumingFrom)||this!==e;let s=!0;if((this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty))&&(s=!1),i&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(s=!1),this.resolvedRelativeTargetAt===Y.uv.timestamp&&(s=!1),s)return;const{layout:o,layoutId:a}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!o&&!a)return;v(this.layoutCorrected,this.layout.layoutBox);const n=this.treeScale.x,r=this.treeScale.y;(0,x.OU)(this.layoutCorrected,this.treeScale,this.path,i),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms=(0,k.ge)());const{target:l}=e;if(!l)return void(this.projectionTransform&&(this.projectionDelta=(0,k.xU)(),this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta=(0,k.xU)(),this.projectionDeltaWithTransform=(0,k.xU)());const h=this.projectionTransform;(0,T.vb)(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=b(this.projectionDelta,this.treeScale),this.projectionTransform===h&&this.treeScale.x===n&&this.treeScale.y===r||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),J.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(t=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),t){const t=this.getStack();t&&t.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(t,e=!1){const i=this.snapshot,s=i?i.latestValues:{},o={...this.latestValues},a=(0,k.xU)();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!e;const r=(0,k.ge)(),g=(i?i.source:void 0)!==(this.layout?this.layout.source:void 0),f=this.getStack(),x=!f||f.members.length<=1,P=Boolean(g&&!x&&!0===this.options.crossfade&&!this.path.some(vt));let D;this.animationProgress=0,this.mixTargetDelta=e=>{const i=e/1e3;var f,S,j,R,A,B;gt(a.x,t.x,i),gt(a.y,t.y,i),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&((0,T.jA)(r,this.layout.layoutBox,this.relativeParent.layout.layoutBox),j=this.relativeTarget,R=this.relativeTargetOrigin,A=r,B=i,ft(j.x,R.x,A.x,B),ft(j.y,R.y,A.y,B),D&&(f=this.relativeTarget,S=D,f.x.min===S.x.min&&f.x.max===S.x.max&&f.y.min===S.y.min&&f.y.max===S.y.max)&&(this.isProjectionDirty=!1),D||(D=(0,k.ge)()),v(D,this.relativeTarget)),g&&(this.animationValues=o,function(t,e,i,s,o,a){o?(t.opacity=(0,n.k)(0,void 0!==i.opacity?i.opacity:1,p(s)),t.opacityExit=(0,n.k)(void 0!==e.opacity?e.opacity:1,0,y(s))):a&&(t.opacity=(0,n.k)(void 0!==e.opacity?e.opacity:1,void 0!==i.opacity?i.opacity:1,s));for(let o=0;o<c;o++){const a=`border${h[o]}Radius`;let r=m(e,a),c=m(i,a);void 0===r&&void 0===c||(r||(r=0),c||(c=0),0===r||0===c||d(r)===d(c)?(t[a]=Math.max((0,n.k)(u(r),u(c),s),0),(l.KN.test(c)||l.KN.test(r))&&(t[a]+="%")):t[a]=c)}(e.rotate||i.rotate)&&(t.rotate=(0,n.k)(e.rotate||0,i.rotate||0,s))}(o,s,this.latestValues,i,P,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=i},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(t){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&((0,Y.WG)(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Y.Gt.update((()=>{N.w.hasAnimatedSinceResize=!0,this.currentAnimation=(0,Q.z)(0,1e3,{...t,onUpdate:e=>{this.mixTargetDelta(e),t.onUpdate&&t.onUpdate(e)},onComplete:()=>{t.onComplete&&t.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const t=this.getStack();t&&t.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const t=this.getLead();let{targetWithTransforms:e,target:i,layout:s,latestValues:o}=t;if(e&&i&&s){if(this!==t&&this.layout&&s&&St(this.options.animationType,this.layout.layoutBox,s.layoutBox)){i=this.target||(0,k.ge)();const e=(0,T.CQ)(this.layout.layoutBox.x);i.x.min=t.target.x.min,i.x.max=i.x.min+e;const s=(0,T.CQ)(this.layout.layoutBox.y);i.y.min=t.target.y.min,i.y.max=i.y.min+s}v(e,i),(0,x.Ww)(e,o),(0,T.vb)(this.projectionDeltaWithTransform,this.layoutCorrected,e,o)}}registerSharedNode(t,e){this.sharedNodes.has(t)||this.sharedNodes.set(t,new U),this.sharedNodes.get(t).add(e);const i=e.options.initialPromotionConfig;e.promote({transition:i?i.transition:void 0,preserveFollowOpacity:i&&i.shouldPreserveFollowOpacity?i.shouldPreserveFollowOpacity(e):void 0})}isLead(){const t=this.getStack();return!t||t.lead===this}getLead(){var t;const{layoutId:e}=this.options;return e&&(null===(t=this.getStack())||void 0===t?void 0:t.lead)||this}getPrevLead(){var t;const{layoutId:e}=this.options;return e?null===(t=this.getStack())||void 0===t?void 0:t.prevLead:void 0}getStack(){const{layoutId:t}=this.options;if(t)return this.root.sharedNodes.get(t)}promote({needsReset:t,transition:e,preserveFollowOpacity:i}={}){const s=this.getStack();s&&s.promote(this,i),t&&(this.projectionDelta=void 0,this.needsReset=!0),e&&this.setOptions({transition:e})}relegate(){const t=this.getStack();return!!t&&t.relegate(this)}resetSkewAndRotation(){const{visualElement:t}=this.options;if(!t)return;let e=!1;const{latestValues:i}=t;if((i.z||i.rotate||i.rotateX||i.rotateY||i.rotateZ||i.skewX||i.skewY)&&(e=!0),!e)return;const s={};i.z&&tt("z",t,s,this.animationValues);for(let e=0;e<_.length;e++)tt(`rotate${_[e]}`,t,s,this.animationValues),tt(`skew${_[e]}`,t,s,this.animationValues);t.render();for(const e in s)t.setStaticValue(e,s[e]),this.animationValues&&(this.animationValues[e]=s[e]);t.scheduleRender()}getProjectionStyles(t){var e,i;if(!this.instance||this.isSVG)return;if(!this.isVisible)return K;const s={visibility:""},o=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,s.opacity="",s.pointerEvents=(0,I.u)(null==t?void 0:t.pointerEvents)||"",s.transform=o?o(this.latestValues,""):"none",s;const a=this.getLead();if(!this.projectionDelta||!this.layout||!a.target){const e={};return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=(0,I.u)(null==t?void 0:t.pointerEvents)||""),this.hasProjected&&!(0,O.HD)(this.latestValues)&&(e.transform=o?o({},""):"none",this.hasProjected=!1),e}const n=a.animationValues||a.latestValues;this.applyTransformsToTarget(),s.transform=b(this.projectionDeltaWithTransform,this.treeScale,n),o&&(s.transform=o(n,s.transform));const{x:r,y:l}=this.projectionDelta;s.transformOrigin=`${100*r.origin}% ${100*l.origin}% 0`,a.animationValues?s.opacity=a===this?null!==(i=null!==(e=n.opacity)&&void 0!==e?e:this.latestValues.opacity)&&void 0!==i?i:1:this.preserveOpacity?this.latestValues.opacity:n.opacityExit:s.opacity=a===this?void 0!==n.opacity?n.opacity:"":void 0!==n.opacityExit?n.opacityExit:0;for(const t in E.H){if(void 0===n[t])continue;const{correct:e,applyTo:i}=E.H[t],o="none"===s.transform?n[t]:e(n[t],a);if(i){const t=i.length;for(let e=0;e<t;e++)s[i[e]]=o}else s[t]=o}return this.options.layoutId&&(s.pointerEvents=a===this?(0,I.u)(null==t?void 0:t.pointerEvents)||"":"none"),s}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((t=>{var e;return null===(e=t.currentAnimation)||void 0===e?void 0:e.stop()})),this.root.nodes.forEach(lt),this.root.sharedNodes.clear()}}}function st(t){t.updateLayout()}function ot(t){var e;const i=(null===(e=t.resumeFrom)||void 0===e?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&i&&t.hasListeners("didUpdate")){const{layoutBox:e,measuredBox:s}=t.layout,{animationType:o}=t.options,a=i.source!==t.layout.source;"size"===o?(0,F.X)((t=>{const s=a?i.measuredBox[t]:i.layoutBox[t],o=(0,T.CQ)(s);s.min=e[t].min,s.max=s.min+o})):St(o,i.layoutBox,e)&&(0,F.X)((s=>{const o=a?i.measuredBox[s]:i.layoutBox[s],n=(0,T.CQ)(e[s]);o.max=o.min+n,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[s].max=t.relativeTarget[s].min+n)}));const n=(0,k.xU)();(0,T.vb)(n,e,i.layoutBox);const r=(0,k.xU)();a?(0,T.vb)(r,t.applyTransform(s,!0),i.measuredBox):(0,T.vb)(r,e,i.layoutBox);const l=!L(n);let h=!1;if(!t.resumeFrom){const s=t.getClosestProjectingParent();if(s&&!s.resumeFrom){const{snapshot:o,layout:a}=s;if(o&&a){const n=(0,k.ge)();(0,T.jA)(n,i.layoutBox,o.layoutBox);const r=(0,k.ge)();(0,T.jA)(r,e,a.layoutBox),V(n,r)||(h=!0),s.options.layoutRoot&&(t.relativeTarget=r,t.relativeTargetOrigin=n,t.relativeParent=s)}}}t.notifyListeners("didUpdate",{layout:e,snapshot:i,delta:r,layoutDelta:n,hasLayoutChanged:l,hasRelativeTargetChanged:h})}else if(t.isLead()){const{onExitComplete:e}=t.options;e&&e()}t.options.transition=void 0}function at(t){J.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=Boolean(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function nt(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function rt(t){t.clearSnapshot()}function lt(t){t.clearMeasurements()}function ht(t){t.isLayoutDirty=!1}function ct(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function ut(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function dt(t){t.resolveTargetDelta()}function mt(t){t.calcProjection()}function pt(t){t.resetSkewAndRotation()}function yt(t){t.removeLeadSnapshot()}function gt(t,e,i){t.translate=(0,n.k)(e.translate,0,i),t.scale=(0,n.k)(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function ft(t,e,i,s){t.min=(0,n.k)(e.min,i.min,s),t.max=(0,n.k)(e.max,i.max,s)}function vt(t){return t.animationValues&&void 0!==t.animationValues.opacityExit}const xt={duration:.45,ease:[.4,0,.1,1]},Tt=t=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Pt=Tt("applewebkit/")&&!Tt("chrome/")?Math.round:r.l;function Dt(t){t.min=Pt(t.min),t.max=Pt(t.max)}function St(t,e,i){return"position"===t||"preserve-aspect"===t&&!(0,T.HQ)(w(e),w(i),.2)}var jt=i(3998);const Rt=it({attachResizeListener:(t,e)=>(0,jt.k)(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),kt={current:void 0},At=it({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!kt.current){const t=new Rt({});t.mount(window),t.setOptions({layoutScroll:!0}),kt.current=t}return kt.current},resetTransform:(t,e)=>{t.style.transform=void 0!==e?e:"none"},checkIsScrollRoot:t=>Boolean("fixed"===window.getComputedStyle(t).position)})},775:(t,e,i)=>{i.d(e,{w:()=>s});const s={hasAnimatedSinceResize:!0,hasEverUpdated:!1}},9826:(t,e,i)=>{i.d(e,{P:()=>a});var s=i(5269);function o(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const a={correct:(t,e)=>{if(!e.target)return t;if("string"==typeof t){if(!s.px.test(t))return t;t=parseFloat(t)}return`${o(t,e.target.x)}% ${o(t,e.target.y)}%`}}},8605:(t,e,i)=>{i.d(e,{_:()=>a});var s=i(9713),o=i(1614);const a={correct:(t,{treeScale:e,projectionDelta:i})=>{const a=t,n=o.f.parse(t);if(n.length>5)return a;const r=o.f.createTransformer(t),l="number"!=typeof n[0]?1:0,h=i.x.scale*e.x,c=i.y.scale*e.y;n[0+l]/=h,n[1+l]/=c;const u=(0,s.k)(h,c,.5);return"number"==typeof n[2+l]&&(n[2+l]/=u),"number"==typeof n[3+l]&&(n[3+l]/=u),r(n)}}},8645:(t,e,i)=>{i.d(e,{$:()=>o,H:()=>s});const s={};function o(t){Object.assign(s,t)}},2957:(t,e,i)=>{function s(t){return[t("x"),t("y")]}i.d(e,{X:()=>s})},1630:(t,e,i)=>{function s(t){return void 0===t||1===t}function o({scale:t,scaleX:e,scaleY:i}){return!s(t)||!s(e)||!s(i)}function a(t){return o(t)||n(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function n(t){return r(t.x)||r(t.y)}function r(t){return t&&"0%"!==t}i.d(e,{HD:()=>a,vF:()=>n,vk:()=>o})},4805:(t,e,i)=>{i.d(e,{L:()=>n,m:()=>a});var s=i(8448),o=i(5673);function a(t,e){return(0,s.FY)((0,s.bS)(t.getBoundingClientRect(),e))}function n(t,e,i){const s=a(t,i),{scroll:n}=e;return n&&((0,o.Ql)(s.x,n.offset.x),(0,o.Ql)(s.y,n.offset.y)),s}}}]);