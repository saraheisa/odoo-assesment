// used syscall() as a benchmark to make the system switch to kernel mode 
// and used time.h to calculate the time to do so

#include <time.h>
#include <stdio.h>
#include <sys/syscall.h>

int main () {
   clock_t start, end, total;

   start = clock();
   
//  SYS_write specifies the system call number which differs on each OS
// '1' represents number of fields to Write
// '15' represents the size in bytes
   syscall(SYS_write, 1, "test test test\n", 15);
   
   end = clock();
   
   total = (long double)(end - start) / CLOCKS_PER_SEC;
   // the number is insanely small so using e may help
   printf("Elapsed Time: %Le\n", total);

   return(0);
}
