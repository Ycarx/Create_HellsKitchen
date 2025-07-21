ItemEvents.tooltip(event => {
    event.addAdvanced('pamhc2foodcore:gummycreepersitem', (item, advanced, text) => {
        text.add(1, Text.blue('Tough II (03:00)')); 
    });

})