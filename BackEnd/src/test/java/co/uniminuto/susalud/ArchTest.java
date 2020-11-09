package co.uniminuto.susalud;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("co.uniminuto.susalud");

        noClasses()
            .that()
                .resideInAnyPackage("co.uniminuto.susalud.service..")
            .or()
                .resideInAnyPackage("co.uniminuto.susalud.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..co.uniminuto.susalud.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
