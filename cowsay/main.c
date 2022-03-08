#include <stdio.h>
#include <string.h>

#define MAXSIZE 120
#define ballonWidth 40

/*====================================================================================================*/
void topMargin();
void bottomMargin();
void sapaceLoop(int spaceTotal);
void speach(char string[MAXSIZE], int stringSize);
void cowbow(int state);
void cowsay(char string[MAXSIZE], int state);
/*====================================================================================================*/
int main(){

    // Declaring.
    char output[112];
    char input[200];
    int i;
    int outputSize;
    int done;
    // Receiving the cow text.
    do{
        printf("\nMuuuuu -");
        fflush(stdin);
        fgets(input, 200, stdin);
        input[strlen(input)-1] = '\0';

        // Filtering string.
        outputSize = -1;
        done=0;
        for(i = 0; i < strlen(input); i++){
            if((input[i] == '"') && (outputSize == -1)){
                outputSize++;
            }
            else if((input[i] == '"') && (outputSize != -1)){
                outputSize++;
                output[outputSize] = '\0';
                done = 1;
            }

            if((outputSize >= 0)&&(input[i]!= '"')){
                output[outputSize] = input[i];
                outputSize++;
            }
        }

        if((outputSize>MAXSIZE)||(outputSize <= 0)||(done==0)){
            printf("\nThe input is invalid.");
        }

    }while((outputSize>MAXSIZE)||(outputSize <= 0)||(done==0));
    // COWSAY !.
    int state = 0;
    cowsay(output, state);

    return 0;
}
/*====================================================================================================*/
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
void speach(char string[MAXSIZE], int stringSize){
    if(stringSize <= ballonWidth){ // Considering that will not take more than one line. 
        printf("< ");

        printf("%s", string);
        // Rest of the line.
        int i;
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
        int thirdBreak=-1;
        int lastSpace=-1;
        for (int i = 0; i < stringSize; i++){
            if(string[i] == " "){// Position of the last space found.
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

            if(i == 139){
                if(lastSpace == -1){
                    thirdBreak = lastSpace;
                }
                else{
                    thirdBreak = lastSpace;
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
    char eyes[8] = "o$@*-0.\0";
    printf("\n        \\   ^__^");
    printf("\n         \\  (%c%c)\\_______", eyes[state], eyes[state]);
    printf("\n            (__)\\       )\\/\\");
    printf("\n                 ||----w |");
    printf("\n                 ||     ||");
    printf("\n");
}

// Function to put together the other ones.
void cowsay(char string[MAXSIZE], int state){
    int stringSize = strlen(string);

    printf("\n");
    topMargin();

    speach(string, stringSize);

    bottomMargin();

    cowbody(state);
}
/*====================================================================================================*/