import React, { Component } from 'react';
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import AudioPlayer from "osmd-audio-player";

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: props.file
    };
    window.audioPlayer = new AudioPlayer();
    this.divRef = React.createRef();
  }

  play() { 
    window.audioPlayer.play(); 
  }

  pause() { 
    window.audioPlayer.pause(); 
  }
  
  stop() { 
    window.audioPlayer.stop(); 
  }

  async componentDidMount() {
    this.osmd = new OpenSheetMusicDisplay(this.divRef.current);
    await this.osmd.load(this.state.file);
    await this.osmd.render();
    await window.audioPlayer.loadScore(this.osmd);
    
    this.osmd.FollowCursor = true;
    
    this.osmd.autoResizeEnabled = true;
    // this.osmd.cursor.Iterator.currentTimeStamp.setRealValue=0.75;
    window.audioPlayer.on("iteration", notes => {
        console.log(notes);
        
        console.log(this.osmd.cursor.cursorElementId);
        console.log(this.osmd.cursor.Iterator.CurrentVoiceEntries[0].Notes[0].halfTone);
        console.log(this.osmd.cursor.Iterator.CurrentVoiceEntries[0].Notes[0]);
        console.log(this.osmd.cursor.Iterator.CurrentVoiceEntries[0].Notes[0].Pitch);
        
        console.log(this.osmd.cursor.currentPageNumber);
        
        console.log(this.osmd.cursor.Iterator.currentTimeStamp.realValue);

        
        // console.log(this.osmd.graphicalnote.PositionAndShape);
        // osmd.graphic.getClickedObject()
        // graphicalnote.PositionAndShape.AbsolutePosition.x및 PositionAndShape.Size.

// let boundingbox = this.osmd.graphic.measureList[0][1].PositionAndShape;
// this.osmd.drawer.drawBoundingBox(boundingbox, "#34cfeb66")
        // r.Iterator.CurrentVoiceEntries[0]
      });

      // for(var i = 0; i<10;i++){
      //   await this.osmd.cursor.next();
    
      // }
// window.scrollTo('cursorImg-0');
    await this.osmd.cursor.show();  
    // this.osmd.cursor.reset() .Iterator.currentTimeStamp=0.75;
    
    
    
    // this.osmd.setOptions
    // this.osmd.cursor.updateStyle('#41e9f2');
    // this.osmd.cursor.cursorOptions="blue";
    // await this.osmd.cursor.update();

	// const cursorVoiceEntry: VoiceEntry = 
  // this.osmd.cursor.Iterator.CurrentVoiceEntries[1];
	// const baseNote: Note = 
  // this.osmd.cursor.cursorVoiceEntry.Notes[1];
	// console.log("Stem direction of VoiceEntry under Cursor: " + StemDirectionType[cursorVoiceEntry.StemDirection]);
	// console.log("base note of Voice Entry at second cursor position: " + baseNote.Pitch.ToString());

	// osmd.setOptions( { autoResize: true });
    
  // // timestamp 바교
  // while(osmd.cursor.iterator.currentTime < currentNote.timestamp) {
  //   osmd.cursor.next()
// }
  }
  
  render() {
      
    return (<>
    
      <div className="controls">
        <button onClick={this.play}>Play</button>
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    
    
      <div ref={this.divRef} />
    </>
    );
  }
}

export default Score;