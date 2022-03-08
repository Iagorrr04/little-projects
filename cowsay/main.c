#include <stdio.h>
#include <string.h>

#define MAXSIZE 120
#define ballonWidth 40

void topMargin(){
    int i;
    printf("  ");
    for(i = 0; i < ballonWidth; i++){
        printf("_");
    }
    printf("\n");
}    

void bottomMargin(){
    int i;
    printf("  ");
    for(i = 0; i < ballonWidth; i++){
        printf("-");
    }
    printf("\n");
}

void spaceLoop(int spaceTotal){
    int i;
    for(i = 0; i < spaceTotal; i++){
        printf(" ");
    }
}

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

void cowsay(char string[MAXSIZE]){
    int stringSize = strlen(string);

    printf("\n");
    topMargin();

    speach(string, stringSize);

    bottomMargin();

    
}

int main(){

    // Declaring.
    char string[430];

    // Receiving the cow text.
    printf("\nEnter the cow text: ");
    fflush(stdin);
    fgets(string, 429, stdin);
    string[strlen(string)-1] = '\0';


    // COWSAY !.
    cowsay(string);

    return 0;
}