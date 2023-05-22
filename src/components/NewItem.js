import React from 'react';
import '../App.css'

export default function NewItem() {
  return (
    <>
    <main>
        
        <div className="width-80">
            
            <h3 className="data">ADD DETAILS OF NEW ITEM HERE</h3>
            <div id="container" >
                
                <form action="/newitem.ejs" method="POST" autoComplete="off">
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white"><i className="fa fa-user"></i> </span>
                            </div>
                            <input name="size" id="size" type="text" placeholder="size"
                                className="form-control border-left-0" required/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white"><i className="fa fa-envelope"></i></span>
                                    </div>
                                    <input name="gct" id="gct" type="text" placeholder="GCT"
                                        className="form-control border-left-0"/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white"><i className="fa fa-phone"></i></span>
                                    </div>
                                    <input name="ht" id="ht" type="text" placeholder="HT" className="form-control border-left-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="conatiner justify-content">
                        <div className="form-check form-check-inline mar">
                            <input className="form-check-input" type="radio" name="station" id="inlineRadioa1"
                                value="a1"/>
                            <label className="form-check-label" htmlFor="inlineRadioa1" >A1</label>
                        </div>
                        <div className="form-check form-check-inline mar">
                            <input className="form-check-input" type="radio" name="station" id="inlineRadioa2"
                                value="a2"/>
                            <label className="form-check-label" htmlFor="inlineRadioa2" >A2</label>
                        </div>
                        <div className="form-check form-check-inline mar">
                            <input className="form-check-input" type="radio" name="station" id="inlineRadioa3"
                                value="a3"/>
                            <label className="form-check-label" htmlFor="inlineRadioa3">A3</label>
                        </div>
                    
                        <div className="form-check form-check-inline mar">
                            <input className="form-check-input" type="radio" name="station" id="inlineRadiob1"
                                value="b1"/>
                            <label className="form-check-label" htmlFor="inlineRadiob1">B1</label>
                        </div>
                        <div className="form-check form-check-inline mar">
                            <input className="form-check-input" type="radio" name="station" id="inlineRadiob2"
                                value="b2"/>
                            <label className="form-check-label" htmlFor="inlineRadiob2">B2</label>
                        </div>
                        <div className="form-check form-check-inline mar">
                            <input className="form-check-input" type="radio" name="station" id="inlineRadiob3"
                                value="b3"/>
                            <label className="form-check-label" htmlFor="inlineRadiob3">B3</label>
                        </div>
        
                        <div className="form-check form-check-inline mar">
                            <input className="form-check-input" type="radio" name="station" id="inlineRadioc1"
                                value="c1"/>
                            <label className="form-check-label" htmlFor="inlineRadioc1">C1</label>
                        </div>
                        <div className="form-check form-check-inline mar">
                            <input className="form-check-input" type="radio" name="station" id="inlineRadioc2"
                                value="c2"/>
                            <label className="form-check-label" htmlFor="inlineRadioc2">C2</label>
                        </div>
                        <div className="form-check form-check-inline mar">
                            <input className="form-check-input" type="radio" name="station" id="inlineRadioc3"
                                value="c3"/>
                            <label className="form-check-label" htmlFor="inlineRadioc3">C3</label>
                        </div>
                
                        <div className="form-check form-check-inline mar">
                            <input className="form-check-input" type="radio" name="station" id="inlineRadiod1"
                                value="d1"/>
                            <label className="form-check-label" htmlFor="inlineRadiod1">D1</label>
                        </div>
                        <div className="form-check form-check-inline mar">
                            <input className="form-check-input" type="radio" name="station" id="inlineRadiod2"
                                value="d2"/>
                            <label className="form-check-label" htmlFor="inlineRadiod2">D2</label>
                        </div>
                        <div className="form-check form-check-inline mar">
                            <input className="form-check-input" type="radio" name="station" id="inlineRadiod3"
                                value="d3"/>
                            <label className="form-check-label" htmlFor="inlineRadiod3">D3</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary float-right mx-3 my-3"  onClick="display_alert()" name="Contact">
                        <i className="fa fa-paper-plane"></i>
                        Send
                    </button>
                </form>
            </div>
        </div>
    </main>
    </>
  )
}
