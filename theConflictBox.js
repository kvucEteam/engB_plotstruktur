
// Funktionen rescaler billedet saaledes at forholdet imellem billedets naturlige hoejde og bredde bevares.
//    ImgWrapper = En wrapper (f.eks et div-tag) omkring en div med et billede.
//    NativeWidth og NativeHeigth er den "naturlige" bredde og hoejde for billedet.
function RescaleImage(ImgWrapper, NativeWidth, NativeHeigth){
	var ContainerWidth =  $( ImgWrapper ).width();
	var Containerheigth = (NativeHeigth/NativeWidth)*ContainerWidth;
	$( ImgWrapper ).height(Containerheigth);
	console.log("ContainerWidth: " + ContainerWidth + ", Containerheigth: " + Containerheigth );
}

// Resize overlayet til at matche billedet:
function ResizeAndPositionOverlayWindow(WindowSelector, OverlayWindowSelector){
	var Pos = $(WindowSelector).offset();
	$( OverlayWindowSelector ).css({ position: "absolute", top: Pos.top+"px", left: Pos.left+"px"});
	console.log("Pos.top: " + Pos.top + ", Pos.left: " + Pos.left);
	$(OverlayWindowSelector).width( $(WindowSelector).width() );
	$(OverlayWindowSelector).height( $(WindowSelector).height() );
}

// Resize overlayet til at matche billedet:
function ResizeRedBlueHover(SelectorObj, OverlayWindowSelector){
	var Pos = SelectorObj.offset();
	$( OverlayWindowSelector ).css({ position: "absolute", top: Pos.top+"px", left: Pos.left+"px"});
	console.log("----- Pos.top: " + Pos.top + ", Pos.left: " + Pos.left);
	$(OverlayWindowSelector).width( SelectorObj.width() );
	$(OverlayWindowSelector).height( SelectorObj.height() );
}

// Returnere "true" eller "false" afhaengig om muse-cursoren er inde eller ude for elementet med selectoren "BoxId":
function MouseOverBox(Xpos, Ypos, BoxId){
	var Top = $(BoxId).offset().top;
	var Left = $(BoxId).offset().left;
	var Width = $(BoxId).width();
	var Height = $(BoxId).height();
	var Bool = ( (Left <= Xpos) && (Xpos <= Left + Width) && (Top <= Ypos) && (Ypos <= Top + Height) ) ? true : false;
	if (Bool) console.log("BoxId: " + BoxId);
	return Bool;
}


$( document ).ready(function() {

	$(".box").prepend('<div class="clickbg"><h5>(Click here)</h5></div>');

	$( "#box1, #box1_overlay_blue" ).on( "mouseenter", function( event ) {
		$("#box1_overlay_blue").show();
		ResizeAndPositionOverlayWindow("#box1", "#box1_overlay_blue");
	});
	$( "#box1, #box1_overlay_blue" ).on( "mouseleave", function( event ) {
		$("#box1_overlay_blue").hide();
	});

	$( "#box2, #box2_overlay_blue" ).on( "mouseenter", function( event ) {
		$("#box2_overlay_blue").show();
		ResizeAndPositionOverlayWindow("#box2", "#box2_overlay_blue");
	});
	$( "#box2, #box2_overlay_blue" ).on( "mouseleave", function( event ) {
		$("#box2_overlay_blue").hide();
	});

	$( "#box3, #box3_overlay_red" ).on( "mouseenter", function( event ) {
		$("#box3_overlay_red").show();
		ResizeAndPositionOverlayWindow("#box3", "#box3_overlay_red");
	});
	$( "#box3, #box3_overlay_red" ).on( "mouseleave", function( event ) {
		$("#box3_overlay_red").hide();
	});

	$( "#box4, #box4_overlay_red" ).on( "mouseenter", function( event ) {
		$("#box4_overlay_red").show();
		ResizeAndPositionOverlayWindow("#box4", "#box4_overlay_red");
	});
	$( "#box4, #box4_overlay_red" ).on( "mouseleave", function( event ) {
		$("#box4_overlay_red").hide();
	});

	// $( ".ImgWrapper, #AntagonistArrow, #ProtagonistArrow, #box1_overlay_blue, #box2_overlay_blue, #box3_overlay_red, #box4_overlay_red" ).on( "mousedown", function( event ) {
	$( ".ImgWrapper, #AntagonistArrow, #ProtagonistArrow, #box1_overlay_blue, #box2_overlay_blue, #box3_overlay_red, #box4_overlay_red" ).on( "click", function( event ) {
		// $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
			if (MouseOverBox(event.pageX, event.pageY, "#box1")) {
				$("#ProtagonistArrow").show();
				$("#AntagonistArrow").hide();
				$("#box1 .clickbg").remove();
			}
			if (MouseOverBox(event.pageX, event.pageY, "#box2")) {
				$("#box2 .clickbg").remove();
			}
			if (MouseOverBox(event.pageX, event.pageY, "#box3")) {
				$("#AntagonistArrow").show();
				$("#ProtagonistArrow").hide();
				$("#box3 .clickbg").remove();
			}
			if (MouseOverBox(event.pageX, event.pageY, "#box4")) {
				$("#box4 .clickbg").remove();
			}
	});

	// Naar vinduet loader rescales billederne:
	$(window).load(function () {
		RescaleImage(".ImgWrapper", 1354, 760);
		ResizeAndPositionOverlayWindow(".ImgWrapper", "#AntagonistArrow");
		ResizeAndPositionOverlayWindow(".ImgWrapper", "#ProtagonistArrow");
	});

	// Naar reloader rescales billederne:
	$(window).resize(function () {
		RescaleImage(".ImgWrapper", 1354, 760);
		ResizeAndPositionOverlayWindow(".ImgWrapper", "#AntagonistArrow");
		ResizeAndPositionOverlayWindow(".ImgWrapper", "#ProtagonistArrow");
	});

})