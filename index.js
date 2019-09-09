/**
 * @file  mofron-comp-slideshare/index.js
 * @brief embeded slideshare component for mofron
 *        it can embeded slide to your page.
 *        usage is the same as official information, but it needs to replace  "iframe" and this component tag.
 * @author simpart
 */
const mf    = require('mofron');
const Text  = require("mofron-comp-text");
const Click = require("mofron-event-click");

mf.comp.SlideShare = class extends mf.Component {
    /**
     * initialize component
     * 
     * @param (mixed) src parameter
     *                object: component option
     * @pmap src
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('SlideShare');
	    this.pmap("src");
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * slide url
     * 
     * @param (string) slide url
     * @return (string) slide url
     * @type parameter
     */
    src (prm) {
        try { this.target().attr({ src : prm }); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * slide width
     * 
     * @param (number) slide width
     * @param (option) style option
     * @return (number) slide width
     * @type parameter
     */
    width (prm,opt) {
        try {
	    if (undefined !== prm) {
                let mch = prm.match(/[0-9]+/);
		if (null !== mch) {
                    if (prm.length === mch[0].length) {
                        prm = prm + "px";
		    }
		}
	    }
	    return super.width(prm, opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * slide height
     * 
     * @param (string) slide height
     * @param (option) style option
     * @return (string (size)) slide height
     * @type parameter
     */
    height (prm,opt) {
        try {
	    if (undefined !== prm) {
	        let mch = prm.match(/[0-9]+/);
                if (null !== mch) {
		    if (prm.length === mch[0].length) {
                        prm = prm + "px";
                    }
	        }
															                }
	    return super.height(prm, opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * iframe border type
     * 
     * @param (string) iframe border type
     * @return (string) iframe border type
     * @type parameter
     */
    frameborder (prm) { 
        try { this.target().attr({ frameborder : prm }); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * margin width
     * 
     * @param (string) margin width
     * @return (string) margin width
     * @type parameter
     */
    marginwidth (prm) {
        try { this.target().attr({ marginwidth : prm }); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * margin height
     *
     * @param (string) margin height
     * @return (string) margin height
     * @type parameter
     */
    marginheight (prm) {
        try { this.target().attr({ marginheight : prm }); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * scrolling type
     * 
     * @param (string) scrolling type
     * @return (string) scrolling type
     * @type parameter
     */
    scrolling (prm) {
        try { this.target().attr({ scrolling : prm }); } catch (e) {
            console.error(e.stack);
            throw e;
        } 
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            let ifr = new mf.Dom('iframe', this);
            ifr.attr({ allowfullscreen: "" });
            this.adom().addChild(ifr);
            this.target(ifr);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.SlideShare;
/* end of file */
