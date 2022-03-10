/*====================================================================================================*/

#include <stdio.h>
#include <string.h>
#include <stdbool.h>

#define MAXFullInput 200
#define MAXTextSize 120
#define ballonWidth 40
#define MAXParameterSize 20

struct input{
    char fullInput[MAXFullInput];
    char parameter[MAXParameterSize];
    char text[MAXTextSize];
    int state;
};
typedef struct input Input;

/*====================================================================================================*/

void topMargin();
void bottomMargin();
void sapaceLoop(int spaceTotal);
void speach(char string[MAXTextSize], int stringSize);
void cowbow(int state);
void cowsay(char string[MAXTextSize], int state);

bool inputManipulation(Input *inputValues);

/*====================================================================================================*/
int main(){

    // Declaring.
    Input mainInput;

    // Receiving the cow text.
    bool valid = false;
    while(!valid){
        printf("Muuuuu - ");
        fflush(stdin);
        fgets(mainInput.fullInput, 200, stdin);
        mainInput.fullInput[strlen(mainInput.fullInput)-1] = '\0';
        valid = inputManipulation(&mainInput);
        printf("\n");
    }
    // COWSAY !.
    cowsay(mainInput.text, mainInput.state);

    return 0;
}
/*====================================================================================================*/
// Function to set the values of the the main input.
bool inputManipulation(Input *inputValues){
    int textSize = -1;
    int i;
    inputValues->state = 0;

    bool textClosed = false;
    bool parameterChar = false;
    for(i = 0; i < strlen(inputValues->fullInput); i++){

        // Output text.
        if((inputValues->fullInput[i] == '"') && (textSize == -1)){// Opening output text.
            textSize++;
            textClosed = false;
        }
        else if ((inputValues->fullInput[i] == '"') && (textSize != -1)){// Closing output text.
            textSize++;
            inputValues->text[textSize] = '\0';
            textClosed = true;
        }

        if((textSize >= 0) && (inputValues->fullInput[i] != '"')){// Output text content.
            inputValues->text[textSize] = inputValues->fullInput[i];
            textSize++;
        }


        // Parameters stuff.
        if((inputValues->fullInput[i] == '-') && (textSize == -1) && (parameterChar == false)){// Next character should be the parameter character.
            parameterChar = true;
        }
        else if(parameterChar == true){
            if(inputValues->fullInput[i] == 'b'){
                inputValues->state = 1;
            }
            else if(inputValues->fullInput[i] == 'd'){
                inputValues->state = 2;
            }
            else if(inputValues->fullInput[i] == 'g'){
                inputValues->state = 3;
            }
            else if(inputValues->fullInput[i] == 'p'){
                inputValues->state = 4;
            }
            else if(inputValues->fullInput[i] == 's'){
                inputValues->state = 5;
            }
            else if(inputValues->fullInput[i] == 't'){
                inputValues->state = 6;
            }
            else if(inputValues->fullInput[i] == 'w'){
                inputValues->state = 7;
            }
            else if(inputValues->fullInput[i] == 'y'){
                inputValues->state = 8;
            }
            else{
                printf("\nW: The given parameter is invalid. Neutral will be used.");
            }
            parameterChar = false;
        }

    }

    if((textSize > MAXTextSize) || (textSize <= 0) || (textClosed == false)){
            printf("\nE: Invalid text output.");
            return false;
        }

    return true;
}

// Function to set the top margin of the balloon.
void topMargin(){
    int i;
    printf("  ");
    for(i = 0; i < ballonWidth; i++){
        printf("_");
    }
    printf("\n");
}    

// Function to set the bottom margin of the ballon.
void bottomMargin(){
    int i;
    printf("  ");
    for(i = 0; i < ballonWidth; i++){
        printf("-");
    }
}

// Horizontal  loop for print as much spaces are necessary.
void spaceLoop(int spaceTotal){
    int i;
    for(i = 0; i < spaceTotal; i++){
        printf(" ");
    }
}

// Function to configure the size of the balloon.
void speach(char string[MAXTextSize], int stringSize){
    if(stringSize <= ballonWidth){ // Considering that will not take more than one line. 
        printf("< ");

        printf("%s", string);
        // Rest of the line.
        spaceLoop(ballonWidth-stringSize);
        printf(" >\n");
    }
    else{ // More than one line output.
        int totalLines;
        if(stringSize > ballonWidth*2){
            totalLines = 3;
        }
        else{
            totalLines = 2;
        }

        // Mapping spaces.
        int firstBreak=-1;
        int secondBreak=-1;
        int lastSpace=-1;
        for (int i = 0; i < stringSize; i++){
            if(string[i] == ' '){// Position of the last space found.
                lastSpace = i;
            }

            if(i == 39){
                if(lastSpace == -1){
                    firstBreak = i;
                }
                else{
                    firstBreak = lastSpace;
                    lastSpace = -1;
                }
            }

            if(i == 79){
                if(lastSpace == -1){
                    secondBreak = i;
                }
                else{
                    secondBreak = lastSpace;
                    lastSpace = -1;
                }
            }
        }

        int currentLinePos = 1;
        printf("/ ");
        for(int i = 0; i < stringSize; i++){
            // Breaking the line according.
            if(i == firstBreak){
                spaceLoop(ballonWidth-currentLinePos);
                printf(" \\");
                printf("\n");
                if(totalLines == 2){
                    printf("\\ ");
                }
                else{
                    printf("| ");
                }
                currentLinePos = 1;
            }
            else if(i == secondBreak){// HAVE THREE LIIINES.
                spaceLoop(ballonWidth-currentLinePos);
                printf(" |");
                printf("\n");
                printf("\\ ");
                currentLinePos = 1;

            }

            // SHOOOOW.
            printf("%c", string[i]);
            currentLinePos++;

            if(i+1 == stringSize){// Last character.
                spaceLoop(ballonWidth-currentLinePos);
                printf(" /");
                printf("\n");
            }

        }
        
    }
}

// Function only to print the cow body.
void cowbody(int state){
    char eyes[] = "o=X$@*-0.\0";
    printf("\n        \\   ^__^");
    printf("\n         \\  (%c%c)\\_______", eyes[state], eyes[state]);
    printf("\n            (__)\\       )\\/\\");
    printf("\n                 ||----w |");
    printf("\n                 ||     ||");
    printf("\n");
}

// Function to put together the other ones.
void cowsay(char string[MAXTextSize], int state){
    int stringSize = strlen(string);

    printf("\n");
    topMargin();

    speach(string, stringSize);

    bottomMargin();

    cowbody(state);
}
/*====================================================================================================*/